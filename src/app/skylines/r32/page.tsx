import { fetchCars } from "@/lib/data";
import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page() {
  const cars = await fetchCars("R32");
  return (
    <div>
      <p>R32</p>
      <CarsContainer cars={cars} />
    </div>
  );
}
