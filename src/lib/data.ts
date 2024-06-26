import { sql } from "@vercel/postgres";
import { Car } from "./definitions";
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
