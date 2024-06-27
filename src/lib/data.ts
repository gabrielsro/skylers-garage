import { sql } from "@vercel/postgres";
import { Car } from "./definitions";
import { Recent } from "./definitions";
import { Model } from "./definitions";

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
    return count.rows[0].count[0] ?? "0";
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch user count");
  }
}

export async function fetchRecenUsers(): Promise<Recent[] | undefined> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const recents =
      await sql`SELECT name, location, src, created_at, array_length(cars, 1) AS car_count
    FROM users
    ORDER BY created_at DESC
    LIMIT 10`;

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
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
