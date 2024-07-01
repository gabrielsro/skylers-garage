import CarCard from "./car-card";
import Pagination from "../generic/pagination";
import { fetchCars, fetchCarPages } from "@/lib/data";

export default async function CarsContainer({
  query,
  model,
  currentPage,
}: {
  query?: {
    color?: string | undefined;
    transmission?: string | undefined;
    sort?: string | undefined;
  };
  model: "R32" | "R33" | "R34" | undefined;
  currentPage: number;
}) {
  const cars = await fetchCars(model, query, currentPage);
  const totalPages = await fetchCarPages(model, query);

  return (
    <div>
      <div className="grid grid-cols-car-cards-mobile gap-2 pr-1 place-content-center">
        {cars?.map((car, i) => {
          return <CarCard car={car} key={i} />;
        })}
      </div>
      <div className="pt-5 pb-6 md:pt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
