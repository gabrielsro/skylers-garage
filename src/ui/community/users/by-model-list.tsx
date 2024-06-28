import ByModelListCard from "./by-model-list-card";
import { fetchUserListModel } from "@/lib/data";

export default async function ByModelList({ model }: { model: string }) {
  const users = await fetchUserListModel(model);
  return (
    <div className="flex flex-col gap-2 pl-1 pr-1">
      {users.map((u, i) => {
        return <ByModelListCard key={i} user={u} />;
      })}
    </div>
  );
}
