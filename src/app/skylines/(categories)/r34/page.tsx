"use client";

import { fetchCars } from "@/lib/data";
import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page({
  searchParams,
}: {
  searchParams?: { color?: string; transmission?: string; sort?: string };
}) {
  const cars = await fetchCars("R34", searchParams);
  const x = JSON.stringify(searchParams);
  const y = JSON.stringify(cars);

  return (
    <div className="pt-6">
      <p>R34</p>
      <p>{x}</p>
      <p>{y}</p>
      <CarsContainer cars={cars} />
    </div>
  );
}
