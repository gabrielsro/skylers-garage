import Image from "next/image";
import Link from "next/link";
import { fetchCar } from "@/lib/data";
import DeleteCar from "@/ui/delete-buttons/delete-car";
import { notFound } from "next/navigation";
import SellerMinimalCard from "@/ui/skylines/seller-minimal-card";
import SpecSheet from "@/ui/skylines/spec-sheet";
import { dollarFormatter } from "@/lib/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCar(params.id);

  if (!car) {
    notFound();
  }

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
    topspeed,
    acceleration,
    weight,
    description,
    src,
    seller,
  } = car;

  const sellerId = car.seller && car.seller?.length > 34;
  return (
    <div className="py-7 bg-nord-6">
      <div className="flex gap-5 justify-end">
        <Image src="/star1.svg" alt="Add to favorites" height={43} width={43} />
        <Image src="/share2.svg" alt="Share" height={40} width={40}></Image>
        <Image src="/comment2.svg" alt="Comment" height={40} width={40} />
        <Link href={`/skylines/${params.id}/edit`}>
          <Image src="/edit3.svg" height={40} width={40} alt="Edit" />
        </Link>
        <DeleteCar id={params.id} model={model} />
      </div>
      <div className="grid place-content-center">
        <div className="pt-3 pb-1 px-2">
          <h1 className="text-2xl text-nord2">{`${year} Nissan ${model} ${edition}`}</h1>
          <h2 className="text-xl text-nord3">{dollarFormatter(car.price)}</h2>
        </div>
        <div className="px-2">
          <SellerMinimalCard
            seller={{
              name: sellerId ? undefined : car.seller,
              id: sellerId ? car.seller : undefined,
            }}
          />
        </div>
        <div className="bg-nord7 max-h-pic-main-height w-screen">
          <p>{car.src}</p>
          {!car.src && (
            <Image
              src="/skyline-card-placeholder11.webp"
              width={514}
              height={514}
              alt="Car placeholder"
            />
          )}
          {car.src && (
            <img
              src={car.src}
              alt={`${car.year} ${car.model} ${car.edition}`}
            />
          )}
        </div>
        <div className="px-2 pt-2 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Image src="/odometer.svg" height={33} width={33} alt="Odometer" />
            <p className="text-nord1 text-lg">{`${mileage} miles`}</p>
          </div>
          <div className="flex gap-1 items-center pr-1">
            <Image src="/location.svg" height={33} width={33} alt="Odometer" />
            <p className="text-nord1 text-lg">{`${location}`}</p>
          </div>
        </div>
        <div className="pt-3 px-2">
          <SpecSheet
            transmission={car.transmission}
            engine={car.engine}
            engineVariation={car.engineVariation}
            displacement={car.displacement}
            horsepower={car.horsepower}
            torque={car.torque}
            weight={car.weight}
            acceleration={car.acceleration}
            topSpeed={car.topspeed}
          />
        </div>
      </div>
    </div>
  );
}
