import { sql } from "@vercel/postgres";
import { Car } from "./definitions";
import { Recent } from "./definitions";
import { Model } from "./definitions";
import { User } from "./definitions";
import { UsersResult } from "./definitions";

export async function fetchCars(model?: Model): Promise<Car[] | undefined> {
  try {
    let cars;
    if (!model) {
      cars = await sql<Car>`SELECT * FROM cars`;
    }
    if (model) {
      cars = await sql<Car>`SELECT * FROM cars WHERE model = ${model}`;
    }
    return cars?.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch cars");
  }
}

export async function fetchUserCount() {
  try {
    const count = await sql`SELECT COUNT(*) FROM users`;
    return count.rows[0].count ?? "0";
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch user count");
  }
}

export async function fetchUserCountModel(model: string) {
  try {
    const count = await sql`SELECT COUNT(DISTINCT users.id)
    FROM users
    JOIN cars ON cars.id = ANY(users.cars)
    WHERE cars.model = ${model}`;
    return count;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch user by model count");
  }
}

export async function fetchUserListModel(model: string): Promise<User[]> {
  try {
    const users =
      await sql`SELECT users.name, users.src, users.location, users.id
    FROM users
    JOIN cars ON cars.id = ANY(users.cars)
    WHERE cars.model = ${model}
    GROUP BY users.id
    LIMIT 5`;
    const usersArray: User[] = users?.rows.map((row: any) => ({
      name: row.name,
      location: row.location,
      src: row.src,
      id: row.id,
    }));
    return usersArray;
  } catch (error) {
    console.error(`Database error: `, error);
    throw new Error("Failed to fetch model users");
  }
}

export async function fetchRecenUsers(): Promise<Recent[] | undefined> {
  try {
    const recents =
      await sql`SELECT name, location, src, created_at, array_length(cars, 1) AS car_count
    FROM users
    ORDER BY created_at DESC
    LIMIT 4`;

    const recentUsers: Recent[] = recents?.rows.map((row: any) => ({
      name: row.name,
      location: row.location,
      src: row.src,
      created_at: row.created_at,
      car_count: row.car_count,
    }));

    return recentUsers;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch recent users");
  }
}

export async function fetchUnknownImage(): Promise<string> {
  try {
    const options = ["waifu", "neko", "shinobu", "megumin", "bully", "cuddle"];
    const random = Math.floor(Math.random() * 5);
    const option = options[random];
    const data = await fetch(`https://api.waifu.pics/sfw/${option}`);
    if (!data.ok) {
      throw new Error();
    }
    const dataJSON = await data.json();
    return dataJSON.url;
  } catch (error) {
    console.error(`Error fetching anime api: `, error);
    throw new Error("Failed to fetch anime api");
  }
}

export async function fetchFilteredUsers(query: string, currentPage: number) {
  const ITEMS_PER_PAGE = 6;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const users = await sql<UsersResult>`
    SELECT
    users.id,
    users.name,
    users.src,
    users.created_at,
    users.rating,
    users.location
    FROM users
    WHERE
    users.name ILIKE ${`%${query}%`} OR
    users.location ILIKE ${`%${query}%`}
    ORDER BY users.rating DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return users.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch users");
  }
}
