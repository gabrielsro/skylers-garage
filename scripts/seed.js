import { db } from "@vercel/postgres";
import cars from "../src/lib/placeholder-cars-data.js";
import parts from "../src/lib/placeholder-parts-data.js";

async function seedCars(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cars (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    model VARCHAR(10) NOT NULL,
    edition VARCHAR(50),
    engine VARCHAR(100),
    displacement INT,
    engineVariation VARCHAR(100),
    transmission VARCHAR(100),
    weight INT,
    topSpeed INT,
    location VARCHAR(100),
    seller VARCHAR(100),
    mileage INT,
    year INT,
    color VARCHAR(50) NOT NULL,
    acceleration NUMERIC(4,1),
    torque INT,
    horsepower INT,
    price INT NOT NULL,
    description TEXT,
    src VARCHAR(300)
    );
    `;

    console.log('Created "cars" table');

    const insertedCars = await Promise.all(
      cars.map(async (car) => {
        const {
          model,
          edition,
          engine,
          displacement,
          engineVariation,
          transmission,
          weight,
          topSpeed,
          price,
          location,
          seller,
          mileage,
          year,
          color,
          acceleration,
          torque,
          horsepower,
          description,
          src,
        } = car;

        await client.sql`
        INSERT INTO cars (model, edition, engine, displacement, engineVariation, transmission, weight, topSpeed, price, location, seller, mileage, year, color, acceleration, torque, horsepower, description, src)
        VALUES (${model}, ${edition || null}, ${engine}, ${
          displacement || null
        }, ${engineVariation || null}, ${transmission || null}, ${
          weight || null
        }, ${topSpeed || null}, ${price || null}, ${location || null}, ${
          seller || "Skyler's Garage"
        }, ${mileage || null}, ${year || null}, ${color}, ${
          acceleration || null
        }, ${torque || null}, ${horsepower || null}, ${description || null}, ${
          src || null
        })
        `;
      })
    );

    console.log(`Seeded ${insertedCars.length} cars`);

    return {
      createTable,
      cars: insertedCars,
    };
  } catch (err) {
    console.error("Error seeding cars:", err);
    throw err;
  }
}

async function seedParts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS parts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    description TEXT,
    seller VARCHAR(100),
    compatibleModels VARCHAR(10)[] NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category in ('engine', 'steering', 'transmission', 'brakes'))
    );
    `;

    console.log('Created "parts" table');

    const insertedParts = await Promise.all(
      parts.map(async (part) => {
        const { name, price, description, seller, compatibleModels, category } =
          part;

        await client.sql`
        INSERT INTO parts (name, price, description, seller, compatibleModels, category)
        VALUES (${name}, ${price}, ${description || null}, ${
          seller || "Skyler's Garage"
        },${compatibleModels || ["r32", "r33", "r34"]}, ${category})
        `;
      })
    );

    console.log(`Seeded ${insertedParts.length} parts`);

    return {
      createTable,
      parts: insertedParts,
    };
  } catch (err) {
    console.error("Error seeding parts:", err);
    throw err;
  }
}

async function main() {
  const client = await db.connect();
  await seedCars(client);
  //   await seedParts(client);
  client.end();
}

main().catch((err) => {
  console.error("An error ocurred while seeding the database:", err);
});
