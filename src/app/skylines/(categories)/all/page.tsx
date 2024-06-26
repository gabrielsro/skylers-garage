import { fetchCars } from "@/lib/data";
import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page() {
  const cars = await fetchCars();
  return (
    <div className="pt-6">
      <CarsContainer cars={cars} />
    </div>
  );
}
