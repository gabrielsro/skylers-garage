import CarCard from "./car-card";
import { fetchCars } from "@/lib/data";

export default async function CarsContainer({
  searchParams,
  model,
}: {
  searchParams?: { color?: string; transmission?: string; sort?: string };
  model: "R32" | "R33" | "R34" | undefined;
}) {
  const cars = await fetchCars(model, searchParams);
  console.log(cars);

  return (
    <div className="grid grid-cols-car-cards-mobile gap-2 pr-1 place-content-center">
      {cars?.map((car, i) => {
        return <CarCard car={car} key={i} />;
      })}
    </div>
  );
}
