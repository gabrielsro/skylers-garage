"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CarFormSchema = z.object({
  model: z.string(),
  year: z.coerce.number(),
  edition: z.string(),
  transmission: z.enum(["Automatic", "Manual"]),
  mileage: z.coerce.number(),
  color: z.string(),
  location: z.string(),
  price: z.coerce.number(),
  engine: z.string(),
  engineVariation: z.string(),
  displacement: z.coerce.number(),
  horsepower: z.coerce.number(),
  torque: z.coerce.number(),
  topSpeed: z.coerce.number(),
  acceleration: z.coerce.number(),
  weight: z.coerce.number(),
  src: z.string(),
  description: z.string(),
});

export async function createCar(formdata: FormData) {
  const rawFormData = Object.fromEntries(formdata.entries());
  console.log(rawFormData);
  const {
    model,
    year,
    edition,
    transmission,
    mileage,
    color,
    location,
    price,
    engine,
    engineVariation,
    displacement,
    horsepower,
    torque,
    topSpeed,
    acceleration,
    weight,
    src,
    description,
  } = CarFormSchema.parse(rawFormData);

  await sql`
  INSERT INTO cars (model, year, edition, transmission, mileage, color, location, price, engine, engineVariation, displacement, horsepower, torque, topSpeed, acceleration, weight, src, description)
  VALUES (${model}, ${year}, ${edition}, ${transmission}, ${mileage}, ${color}, ${location}, ${price}, ${engine}, ${engineVariation}, ${displacement}, ${horsepower}, ${torque}, ${topSpeed}, ${acceleration}, ${weight}, ${
    src ? src : null
  }, ${description})
  `;

  revalidatePath("/skylines/all");
  redirect("/skylines");
}
