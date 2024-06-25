import { sql } from "@vercel/postgres";
import { Car } from "./definitions";

export async function fetchCars() {
  try {
    const cars = await sql<Car>`SELECT * FROM cars`;
    return cars.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch cars");
  }
}
