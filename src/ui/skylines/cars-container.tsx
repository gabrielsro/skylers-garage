import { Car } from "@/lib/definitions";
import CarCard from "./car-card";

export default async function CarsContainer({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-car-cards-mobile gap-2 pr-1 place-content-center">
      {cars.map((car) => {
        return <CarCard car={car} />;
      })}
    </div>
  );
}
