import RecentUsers from "@/ui/community/users/recent-users";
import ByModel from "@/ui/community/users/by-model";
import Search from "@/ui/generic/search";
import SearchResults from "@/ui/community/users/search-results";
import { Suspense } from "react";
import GenericFallback from "@/ui/generic/genericFallback";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="min-h-screen grid place-content-center px-1 pt-8 bg-nord-5">
      <div className="pb-2">
        <div className="pb-2 pt-2">
          <Search placeholder="Search users..." />
        </div>
        <div className="pt-2">
          <Suspense
            fallback={<GenericFallback size={20} key={query + currentPage} />}
          >
            <SearchResults query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-recent-users-model-tempate w-screen place-content-center overflow-hidden">
        <RecentUsers />
        <ByModel />
      </div>
    </div>
  );
}
