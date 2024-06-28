import { fetchUserCountModel } from "@/lib/data";

export default async function ByModelCount({
  model,
}: {
  model: "R32" | "R33" | "R34";
}) {
  const count = await fetchUserCountModel(model);
  return (
    <div className="w-full">
      <p className="text-center text-lg font-bold">{count.rows[0].count}</p>
      <p>Users</p>
    </div>
  );
}
