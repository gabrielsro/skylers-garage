import { fetchCars } from "@/lib/data";
import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page() {
  const cars = await fetchCars("R33");

  return (
    <div>
      <p>R33</p>
      <CarsContainer cars={cars} />
    </div>
  );
}
