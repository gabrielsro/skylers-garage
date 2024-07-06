import Image from "next/image";
import { deleteCar } from "@/lib/actions";

export default function DeleteCar({
  id,
  model,
}: {
  id: string;
  model: string;
}) {
  const deleteCarWithId = deleteCar.bind(null, id, model);
  return (
    <form action={deleteCarWithId}>
      <button type="submit" className="flex">
        <Image src="/delete1.svg" height={40} width={40} alt="Delete" />
      </button>
    </form>
  );
}
