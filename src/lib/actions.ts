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

export async function updateCar(id: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
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

  await sql`UPDATE cars
  SET model=${model}, year=${year}, edition=${edition}, transmission=${transmission}, mileage=${mileage}, color=${color}, location=${location}, price=${price}, engine=${engine}, engineVariation=${engineVariation}, displacement=${displacement}, horsepower=${horsepower}, torque=${torque}, topSpeed=${topSpeed}, acceleration=${acceleration}, weight=${weight}, src=${src}, description=${description}
  WHERE id=${id}`;

  revalidatePath(`/skylines/${id}`);
  redirect(`/skylines/${id}`);
}

export async function deleteCar(id: string, model: string) {
  await sql`DELETE FROM cars
  WHERE id = ${id}
  `;

  console.log(model);

  revalidatePath(`/skylines/all`);
  revalidatePath(`/skylines/${model}`);
  redirect(`/skylines/${model.toLowerCase()}`);
}
