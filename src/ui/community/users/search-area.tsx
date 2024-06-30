import { fetchUserPages } from "@/lib/data";
import SearchResults from "./search-results";
import Pagination from "@/ui/generic/pagination";

export default async function SearchArea({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const totalPages = await fetchUserPages(query);

  return (
    <div>
      <SearchResults query={query} currentPage={currentPage} />
      <div className="pt-3 pb-2">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
