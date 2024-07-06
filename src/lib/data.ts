import { sql } from "@vercel/postgres";
import { Car } from "./definitions";
import { SellerMinimal } from "./definitions";
import { Recent } from "./definitions";
import { Model } from "./definitions";
import { User } from "./definitions";
import { UsersResult } from "./definitions";

const ITEMS_PER_PAGE = 8;
const CARS_PER_PAGE = 10;

export async function fetchUserPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*) 
    FROM users
    WHERE
    users.name ILIKE ${`%${query}%`} OR
    users.location ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch total number of users");
  }
}

export async function fetchCarPages(
  model?: Model,
  searchParams?: {
    sort?: string | undefined;
    transmission?: string | undefined;
    color?: string | undefined;
  }
) {
  try {
    let cars;
    let params = searchParams
      ? Object.entries(searchParams).filter((entry) => Object.values(entry)[0])
      : [];

    let criteria = params.filter((p) => p[0] !== "sort" && p[1]);
    if (model) {
      if (criteria.length < 1) {
        cars = await sql`SELECT COUNT(*) FROM cars 
            WHERE cars.model = ${model}
            `;
      }
      if (criteria.length === 1) {
        if (criteria[0][0] === "transmission") {
          cars = await sql`SELECT COUNT(*) FROM cars
                  WHERE cars.transmission = ${searchParams?.transmission} 
                  AND cars.model = ${model}
                  `;
        }
        if (criteria[0][0] === "color") {
          cars = await sql`SELECT COUNT(*) FROM cars
                    WHERE cars.color ILIKE ${`%${searchParams?.color}%`} 
                    AND cars.model = ${model}
                    `;
        }
      }
      if (criteria.length === 2) {
        cars = await sql`SELECT COUNT(*) FROM cars
            WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
            AND cars.transmission = ${
              searchParams?.transmission
            } AND cars.model = ${model}
            `;
      }
    }

    if (!model) {
      if (criteria.length < 1) {
        cars = await sql`SELECT COUNT(*) FROM cars 
            `;
      }
      if (criteria.length === 1) {
        if (criteria[0][0] === "transmission") {
          cars = await sql`SELECT COUNT(*) FROM cars
                  WHERE cars.transmission = ${searchParams?.transmission} 
                  `;
        }
        if (criteria[0][0] === "color") {
          cars = await sql`SELECT COUNT(*) FROM cars
                    WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                    `;
        }
      }
      if (criteria.length === 2) {
        cars = await sql`SELECT COUNT(*) FROM cars
            WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
            AND cars.transmission = ${searchParams?.transmission}
            `;
      }
    }

    const totalPages = Math.ceil(Number(cars?.rows[0]?.count) / CARS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch total number of cars");
  }
}

export async function fetchCar(id: string) {
  try {
    const car = await sql<Car>`SELECT * FROM cars WHERE id = ${id}`;
    return car?.rows[0];
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch car");
  }
}

export async function fetchSeller(seller: {
  name?: string | undefined;
  id?: string | undefined;
}) {
  let s;
  try {
    if (seller.id) {
      s =
        await sql<SellerMinimal>`SELECT name, id, src FROM users WHERE id = ${seller.id}`;
      return s.rows[0];
    }
    if (seller.name) {
      s =
        await sql<SellerMinimal>`SELECT name, id, src FROM users WHERE name = ${seller.name}`;
      return s.rows[0];
    }
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch seller");
  }
}
export async function fetchCars(
  model?: Model,
  searchParams?: {
    sort?: string | undefined;
    transmission?: string | undefined;
    color?: string | undefined;
  },
  currentPage?: number
): Promise<Car[] | undefined> {
  const LIMIT = CARS_PER_PAGE;
  const OFFSET = ((currentPage || 1) - 1) * CARS_PER_PAGE;

  try {
    let cars;
    let params = searchParams
      ? Object.entries(searchParams).filter((entry) => Object.values(entry)[0])
      : [];

    let criteria = params.filter((p) => p[0] !== "sort" && p[1]);
    let sort = params.filter((p) => p[0] === "sort" && p[1]);
    let order;
    let orderColumn;
    if (sort.length > 0) {
      order = sort[0][1]?.split("-")[1];
      orderColumn = sort[0][1]?.split("-")[0];
    }

    console.log("searchparams:");
    console.log(searchParams);
    console.log("params:");
    console.log(params);
    console.log("criteria:");
    console.log(criteria);
    console.log("sort:");
    console.log(sort);
    console.log("order:");
    console.log(order);
    console.log("order column:");
    console.log(orderColumn);

    if (model) {
      console.log("model");
      console.log(sort);
      if (sort.length > 0) {
        console.log("user wants it sorted");
        if (criteria.length < 1) {
          console.log("no criteria");
          if (orderColumn === "price" && order === "ASC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
            WHERE cars.model = ${model}
            ORDER BY cars.price ASC 
            LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "price" && order === "DESC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
            WHERE cars.model = ${model}
            ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "mileage" && order === "ASC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
            WHERE cars.model = ${model}
            ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "mileage" && order === "DESC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
            WHERE cars.model = ${model}
            ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "year" && order === "DESC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
            WHERE cars.model = ${model}
            ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "year" && order === "ASC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
            WHERE cars.model = ${model}
            ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
        }
        if (criteria.length === 1) {
          console.log("1 criteria");
          if (criteria[0][0] === "transmission") {
            if (orderColumn === "price" && order === "ASC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                AND cars.model = ${model}
                ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "price" && order === "DESC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                AND cars.model = ${model}
                ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "mileage" && order === "ASC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                AND cars.model = ${model}
                ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "mileage" && order === "DESC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                AND cars.model = ${model}
                ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "year" && order === "DESC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                AND cars.model = ${model}
                ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "year" && order === "ASC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                AND cars.model = ${model}
                ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
          }
          if (criteria[0][0] === "color") {
            if (orderColumn === "price" && order === "ASC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  AND cars.model = ${model}
                  ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "price" && order === "DESC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  AND cars.model = ${model}
                  ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "mileage" && order === "ASC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  AND cars.model = ${model}
                  ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "mileage" && order === "DESC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  AND cars.model = ${model}
                  ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "year" && order === "DESC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  AND cars.model = ${model}
                  ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "year" && order === "ASC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  AND cars.model = ${model}
                  ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
          }
        }
        if (criteria.length === 2) {
          console.log("2 criteria");
          if (orderColumn === "price" && order === "ASC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              AND cars.model = ${model}
              ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "price" && order === "DESC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              AND cars.model = ${model}
              ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "mileage" && order === "ASC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              AND cars.model = ${model}
              ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "mileage" && order === "DESC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              AND cars.model = ${model}
              ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "year" && order === "DESC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              AND cars.model = ${model}
              ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "year" && order === "ASC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              AND cars.model = ${model}
              ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
        }
      }
      if (sort.length < 1) {
        console.log("no sort needed");
        if (criteria.length < 1) {
          console.log("no criteria");
          cars = await sql<Car>`SELECT * FROM cars 
          WHERE cars.model = ${model}
          LIMIT ${LIMIT} OFFSET ${OFFSET}
          `;
        }
        if (criteria.length === 1) {
          console.log("1 criteria");
          if (criteria[0][0] === "transmission") {
            cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission} 
                AND cars.model = ${model}
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
          }
          if (criteria[0][0] === "color") {
            cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`} 
                  AND cars.model = ${model}
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
          }
        }
        if (criteria.length === 2) {
          console.log("2 criteria");
          cars = await sql<Car>`SELECT * FROM cars
          WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
          AND cars.transmission = ${
            searchParams?.transmission
          } AND cars.model = ${model}
          LIMIT ${LIMIT} OFFSET ${OFFSET}
          `;
        }
      }
    }

    if (!model) {
      console.log("no model");
      if (sort.length > 0) {
        console.log("user wants it sorted");
        if (criteria.length < 1) {
          console.log("no criteria");
          if (orderColumn === "price" && order === "ASC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
            ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "price" && order === "DESC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
            ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "mileage" && order === "ASC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
            ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "mileage" && order === "DESC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
            ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "year" && order === "DESC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
            ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
          if (orderColumn === "year" && order === "ASC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
            ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
            `;
          }
        }
        if (criteria.length === 1) {
          console.log("1 criteria");
          if (criteria[0][0] === "transmission") {
            if (orderColumn === "price" && order === "ASC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "price" && order === "DESC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "mileage" && order === "ASC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "mileage" && order === "DESC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "year" && order === "DESC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
            if (orderColumn === "year" && order === "ASC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission}
                ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
            }
          }
          if (criteria[0][0] === "color") {
            if (orderColumn === "price" && order === "ASC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "price" && order === "DESC") {
              console.log("by price");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "mileage" && order === "ASC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "mileage" && order === "DESC") {
              console.log("by mileage");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "year" && order === "DESC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
            if (orderColumn === "year" && order === "ASC") {
              console.log("by year");
              cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
                  ORDER BY cars.year ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
            }
          }
        }
        if (criteria.length === 2) {
          console.log("2 criteria");
          if (orderColumn === "price" && order === "ASC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              ORDER BY cars.price ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "price" && order === "DESC") {
            console.log("by price");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              ORDER BY cars.price DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "mileage" && order === "ASC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              ORDER BY cars.mileage ASC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "mileage" && order === "DESC") {
            console.log("by mileage");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              ORDER BY cars.mileage DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "year" && order === "DESC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              ORDER BY cars.year DESC
          LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
          if (orderColumn === "year" && order === "ASC") {
            console.log("by year");
            cars = await sql<Car>`SELECT * FROM cars
              WHERE cars.transmission = ${searchParams?.transmission}
              AND cars.color ILIKE ${`%${searchParams?.color}%`}
              ORDER BY cars.year ASC 
              LIMIT ${LIMIT} OFFSET ${OFFSET}
              `;
          }
        }
      }
      if (sort.length < 1) {
        console.log("no sort needed");
        if (criteria.length < 1) {
          console.log("no criteria");
          cars = await sql<Car>`SELECT * FROM cars 
          LIMIT ${LIMIT} OFFSET ${OFFSET}
          `;
        }
        if (criteria.length === 1) {
          console.log("1 criteria");
          if (criteria[0][0] === "transmission") {
            cars = await sql<Car>`SELECT * FROM cars
                WHERE cars.transmission = ${searchParams?.transmission} 
                LIMIT ${LIMIT} OFFSET ${OFFSET}
                `;
          }
          if (criteria[0][0] === "color") {
            cars = await sql<Car>`SELECT * FROM cars
                  WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
          LIMIT ${LIMIT} OFFSET ${OFFSET}
                  `;
          }
        }
        if (criteria.length === 2) {
          console.log("2 criteria");
          cars = await sql<Car>`SELECT * FROM cars
          WHERE cars.color ILIKE ${`%${searchParams?.color}%`}
          AND cars.transmission = ${searchParams?.transmission}
          LIMIT ${LIMIT} OFFSET ${OFFSET}
          `;
        }
      }
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
    LIMIT 8`;

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
