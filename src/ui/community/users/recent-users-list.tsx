import { fetchRecenUsers } from "@/lib/data";
import RecentUserCard from "./recent-user-card";

export default async function RecentUsersList() {
  const recents = await fetchRecenUsers();
  return (
    <div className="flex flex-col gap-2">
      {Array.isArray(recents) &&
        recents.length > 0 &&
        recents.map((recent, i) => {
          return <RecentUserCard recent={recent} key={i} />;
        })}
    </div>
  );
}
