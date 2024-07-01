import { Car } from "@/lib/definitions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export default async function CarCard({ car }: { car: Car }) {
  return (
    <div className="flex flex-col shadow-lg rounded-sm h-car-card">
      {/* {!car.src || car.src } */}
      <Image
        height={505}
        width={505}
        src="/skyline-anime7.webp"
        alt="Drawing of the rear of a white Nissan Skyline"
      />
      <div className="p-1 whitespace-nowrap">
        <p className="overflow-hidden overflow-ellipsis">{`${car.year} ${car.model} ${car.edition}`}</p>
        <p className="text-nord3">{`${car.mileage} miles`}</p>
        <p>{formatCurrency(car.price)}</p>
      </div>
    </div>
  );
}
