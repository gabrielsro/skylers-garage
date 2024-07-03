import Link from "next/link";
import { fetchCar } from "@/lib/data";
import DeleteCar from "@/ui/delete-buttons/delete-car";

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCar(params.id);
  const {
    model,
    year,
    edition,
    transmission,
    mileage,
    color,
    price,
    engine,
    displacement,
    engineVariation,
    horsepower,
    torque,
    location,
    topSpeed,
    acceleration,
    weight,
    description,
    src,
    seller,
  } = car;
  return (
    <div className="py-10">
      <div className="flex bg-nord7 gap-5">
        <p>ABSOLUTE</p>
        <Link href={`/skylines/${params.id}/edit`}>
          <p>Edit</p>
        </Link>
        <DeleteCar id={params.id} model={model} />
      </div>
      <div className="grid place-content-center">
        <p>{model}</p>
        <p>{year}</p>
        <p>{edition}</p>
        <p>{transmission}</p>
        <p>{mileage}</p>
        <p>{color}</p>
        <p>{price}</p>
        <p>{engine}</p>
        <p>{displacement}</p>
        <p>{engineVariation}</p>
        <p>{horsepower}</p>
        <p>{torque}</p>
        <p>{topSpeed}</p>
        <p>{acceleration}</p>
        <p>{weight}</p>
        <p>{seller}</p>
        <p>{description}</p>
        <p>{src}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
