import { fetchCars } from "@/lib/data";
import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page() {
  const cars = await fetchCars("R34");

  return (
    <div>
      <p>R34</p>
      <CarsContainer cars={cars} />
    </div>
  );
}
