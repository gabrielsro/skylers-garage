import { fetchFilteredUsers, fetchUserPages } from "@/lib/data";
import SearchResultUserCard from "./search-result-user-card";

export default async function SearchResults({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await fetchFilteredUsers(query, currentPage);

  return (
    <div className="flex flex-col px-1 gap-2">
      {users.map((user, i) => (
        <SearchResultUserCard user={user} key={i} />
      ))}
    </div>
  );
}
