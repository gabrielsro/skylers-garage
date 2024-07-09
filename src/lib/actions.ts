"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CarUploadState } from "./definitions";
import email from "next-auth/providers/email";
const bcrypt = require("bcrypt");
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const UserFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const CarFormSchema = z.object({
  model: z.string(),
  year: z.coerce.number(),
  transmission: z.enum(["Automatic", "Manual"], {
    message: "Please select a transmission type",
  }),
  mileage: z.coerce.number().gt(0, "Please enter mileage"),
  color: z.string().trim().min(1, "Please enter car's color"),
  location: z.string().trim().min(3, "Please enter car's location"),
  price: z.coerce.number().gt(0, "Please enter price"),
  engine: z.enum(
    [
      "RB20E",
      "RB20DE",
      "RB20DE NEO",
      "RB20DET",
      "RB25DE",
      "RB25DE NEO",
      "RB25DET",
      "RB25DET NEO",
      "RB26DE",
      "RB26DETT",
      "RB30DE",
      "RBX-GT2",
    ],
    { message: "Please select an engine type" }
  ),
  engineVariation: z
    .enum(["Turbo", "Twin Turbo"], { message: "Invalid engine variation" })
    .optional(),
  displacement: z.coerce.number().gt(0, "Please enter displacement"),
  horsepower: z.coerce.number().gt(0, "Please enter horsepower"),
  torque: z.coerce.number().gt(0, "Please enter torque"),
  topSpeed: z.coerce.number().gt(0, "Please enter top speed"),
  acceleration: z.coerce.number().gt(0, "Please enter acceleration"),
  weight: z.coerce.number().gt(0, "Please enter weight"),
  src: z.string().url(),
  description: z.string().trim(),
});

const r32Schema = z.object({
  year: z.coerce
    .number()
    .gt(1988, { message: "Invalid year" })
    .lte(1994, { message: "Invalid year" }),
  edition: z.enum(
    [
      "Autech Version GTS-4 (HNR32) sedan",
      "GTE",
      "GTE Type-SV",
      "GTE Type-V (HR32) sedan",
      "GTE Type-X",
      "GTE Type-X.V",
      "GT-R (BNR32) coupe",
      "GTS",
      "GTS (HCR32) coupe",
      "GTS (HCR32) sedan",
      "GTS SV",
      "GTS Type-J",
      "GTS Type-X",
      "GTS Urban Road (HR32) coupe",
      "GTS Urban Road (HR32) sedan",
      "GTS V",
      "GTS-4 (HNR32) coupe",
      "GTS-4 (HNR32) sedan",
      "GTS-25 SV",
      "GTS-25 Type S",
      "GTS-25 Type-XG (ECR32) coupe",
      "GTS-25 Type-XG (ECR32) sedan",
      "GTS-25 Type-X (ER32) coupe",
      "GTS-25 Type-X (ER32) sedan",
      "GTS-t",
      "GTS-t Type-M",
      "GTS-t Type-S (HCR32) coupe",
      "GTS-t Type-S (HCR32) sedan",
      "GXi",
      "GXi Type-X (FR32) sedan",
      "HKS EN2-A",
      "HKS Zero-R",
      "HKS Zero-R 2006 spec",
      "Tommykaira M20",
      "Tommykaira M30",
      "Tommykaira R",
      "Type-N1",
      "Type-Nismo",
      "Type-V-Spec I",
      "Type-V-Spec II",
      "Type-V-Spec I N1",
      "Type-V-Spec II N1",
    ],
    {
      message: "Invalid edition",
    }
  ),
});

const r33Schema = z.object({
  year: z.coerce
    .number()
    .gt(1993, { message: "Invalid year" })
    .lte(1998, { message: "Invalid year" }),
  edition: z.enum(
    [
      "4Dr. GT-R Autech Version",
      "GT-R",
      "GT-R LM",
      "ECR33 GTS-25t",
      "ECR33 P.Ride 280 Type MR",
      "ENR33 GTS-4",
      "ER33 GTS-25",
      "HR33 GTS",
      "NISMO 400R",
    ],
    {
      message: "Invalid edition",
    }
  ),
});

const r34Schema = z.object({
  year: z.coerce
    .number()
    .gt(1998, { message: "Invalid year" })
    .lte(2005, { message: "Invalid year" }),
  edition: z.enum(
    [
      "25GT (ER34)",
      "25GT FOUR (ENR34)",
      "25GT Turbo (ER34)",
      "25GT-V (ER34)",
      "25GT-X (ER34)",
      "25GT=X FOUR (ENR34)",
      "25GT-X Turbo (ENR34)",
      "GT (HR24)",
      "GT-R",
      "GT-R M Spec",
      "GT-R M Spec Nur",
      "GT-R NISMO R-tune",
      "GT-R NISMO S-tune",
      "GT-R NISMO Z-tune",
      "GT-R V spec",
      "GT-R V spec UK",
      "GT-R V spec II",
      "GT-R V spec II N1",
      "GT-R V spec II Nur",
      "GT-R V spec N1",
    ],
    {
      message: "Invalid edition",
    }
  ),
});

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          "Something went wrong";
      }
    }
    throw error;
  }
}

export async function modelYears(model: string) {
  if (model === "R32") {
    return { first: 1989, last: 1994 };
  }
  if (model === "R33") {
    return { first: 1993, last: 1998 };
  }
  if (model === "R34") {
    return { first: 1998, last: 2005 };
  }
}

export async function modelEditions(model: string) {
  if (model === "R32") {
    return [
      "Autech Version GTS-4 (HNR32) sedan",
      "GTE",
      "GTE Type-SV",
      "GTE Type-V (HR32) sedan",
      "GTE Type-X",
      "GTE Type-X.V",
      "GT-R (BNR32) coupe",
      "GTS",
      "GTS (HCR32) coupe",
      "GTS (HCR32) sedan",
      "GTS SV",
      "GTS Type-J",
      "GTS Type-X",
      "GTS Urban Road (HR32) coupe",
      "GTS Urban Road (HR32) sedan",
      "GTS V",
      "GTS-4 (HNR32) coupe",
      "GTS-4 (HNR32) sedan",
      "GTS-25 SV",
      "GTS-25 Type S",
      "GTS-25 Type-XG (ECR32) coupe",
      "GTS-25 Type-XG (ECR32) sedan",
      "GTS-25 Type-X (ER32) coupe",
      "GTS-25 Type-X (ER32) sedan",
      "GTS-t",
      "GTS-t Type-M",
      "GTS-t Type-S (HCR32) coupe",
      "GTS-t Type-S (HCR32) sedan",
      "GXi",
      "GXi Type-X (FR32) sedan",
      "HKS EN2-A",
      "HKS Zero-R",
      "HKS Zero-R 2006 spec",
      "Tommykaira M20",
      "Tommykaira M30",
      "Tommykaira R",
      "Type-N1",
      "Type-Nismo",
      "Type-V-Spec I",
      "Type-V-Spec II",
      "Type-V-Spec I N1",
      "Type-V-Spec II N1",
    ];
  }
  if (model === "R33") {
    return [
      "4Dr. GT-R Autech Version",
      "GT-R",
      "GT-R LM",
      "ECR33 GTS-25t",
      "ECR33 P.Ride 280 Type MR",
      "ENR33 GTS-4",
      "ER33 GTS-25",
      "HR33 GTS",
      "NISMO 400R",
    ];
  }
  if (model === "R34") {
    return [
      "25GT (ER34)",
      "25GT FOUR (ENR34)",
      "25GT Turbo (ER34)",
      "25GT-V (ER34)",
      "25GT-X (ER34)",
      "25GT=X FOUR (ENR34)",
      "25GT-X Turbo (ENR34)",
      "GT (HR24)",
      "GT-R",
      "GT-R M Spec",
      "GT-R M Spec Nur",
      "GT-R NISMO R-tune",
      "GT-R NISMO S-tune",
      "GT-R NISMO Z-tune",
      "GT-R V spec",
      "GT-R V spec UK",
      "GT-R V spec II",
      "GT-R V spec II N1",
      "GT-R V spec II Nur",
      "GT-R V spec N1",
    ];
  }
}

export type State = {
  errors?: any;
  messsage?: any;
};

export async function createCar(prevState: State, formdata: FormData) {
  const rawFormData = Object.fromEntries(formdata.entries());
  let validatedFields;

  if (rawFormData.model === "R32") {
    const finalSchema = r32Schema.extend(CarFormSchema.shape);
    validatedFields = finalSchema.safeParse(rawFormData);
  }

  if (rawFormData.model === "R33") {
    const finalSchema = r33Schema.extend(CarFormSchema.shape);
    validatedFields = finalSchema.safeParse(rawFormData);
  }

  if (rawFormData.model === "R34") {
    const finalSchema = r34Schema.extend(CarFormSchema.shape);
    validatedFields = finalSchema.safeParse(rawFormData);
  }

  if (!validatedFields?.success) {
    return {
      errors: validatedFields?.error.flatten().fieldErrors,
      message: "Missing fields. Failed to upload car.",
    };
  }

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
  } = validatedFields.data;

  try {
    await sql`
    INSERT INTO cars (model, year, edition, transmission, mileage, color, location, price, engine, engineVariation, displacement, horsepower, torque, topSpeed, acceleration, weight, src, description)
    VALUES (${model}, ${year}, ${edition}, ${transmission}, ${mileage}, ${color}, ${location}, ${price}, ${engine}, ${engineVariation}, ${displacement}, ${horsepower}, ${torque}, ${topSpeed}, ${acceleration}, ${weight}, ${
      src ? src : null
    }, ${description})
    `;
  } catch (error) {
    return { message: "Database error: Failed to upload vehicle" };
  }

  revalidatePath("/skylines/all");
  redirect("/skylines");
}

export async function createUser(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = UserFormSchema.safeParse(rawFormData);
  if (validatedFields.success) {
    const { name, email, password } = validatedFields.data;
    const hash = await bcrypt.hash(password, 10);
    await sql`
  INSERT INTO users (name, email, password)
  VALUES (${name}, ${email}, ${hash} )
  `;
  }
}

export async function updateCar(id: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  let validatedFields;
  if (rawFormData.model === "R32") {
    const finalSchema = r32Schema.extend(CarFormSchema.shape);
    validatedFields = finalSchema.safeParse(rawFormData);
  }
  if (rawFormData.model === "R33") {
    const finalSchema = r33Schema.extend(CarFormSchema.shape);
    validatedFields = finalSchema.safeParse(rawFormData);
  }
  if (rawFormData.model === "R34") {
    const finalSchema = r34Schema.extend(CarFormSchema.shape);
    validatedFields = finalSchema.safeParse(rawFormData);
  }
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
  } = rawFormData;

  // try {
  //   await sql`UPDATE cars
  // SET model=${model}, year=${year}, edition=${edition}, transmission=${transmission}, mileage=${mileage}, color=${color}, location=${location}, price=${price}, engine=${engine}, engineVariation=${engineVariation}, displacement=${displacement}, horsepower=${horsepower}, torque=${torque}, topSpeed=${topSpeed}, acceleration=${acceleration}, weight=${weight}, src=${src}, description=${description}
  // WHERE id=${id}`;
  // } catch (error) {
  //   return { message: "Database error: Failed to update vehicle" };
  // }
  revalidatePath(`/skylines/${id}`);
  redirect(`/skylines/${id}`);
}

export async function deleteCar(id: string, model: string) {
  try {
    await sql`DELETE FROM cars
  WHERE id = ${id}
  `;
  } catch (error) {
    return { message: "Database error: Failed to delete vehicle" };
  }

  revalidatePath(`/skylines/all`);
  revalidatePath(`/skylines/${model}`);
  redirect(`/skylines/${model.toLowerCase()}`);
}
