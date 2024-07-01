import CarCard from "./car-card";
import { fetchCars } from "@/lib/data";

export default async function CarsContainer({
  query,
  model,
}: {
  query?: {
    color?: string | undefined;
    transmission?: string | undefined;
    sort?: string | undefined;
  };
  model: "R32" | "R33" | "R34" | undefined;
}) {
  const cars = await fetchCars(model, query);

  return (
    <div className="grid grid-cols-car-cards-mobile gap-2 pr-1 place-content-center">
      {cars?.map((car, i) => {
        return <CarCard car={car} key={i} />;
      })}
    </div>
  );
}
