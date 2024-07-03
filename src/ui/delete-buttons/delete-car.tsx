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
      <button type="submit">
        <p>Delete car</p>
      </button>
    </form>
  );
}
