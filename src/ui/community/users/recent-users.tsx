import RecentUsersList from "./recent-users-list";
import RecentUsersFallback from "./recent-users-fallback";
import { Suspense } from "react";
export default function RecentUsers() {
  return (
    <div className="bg-nord7 min-h-lg grid pr-1">
      <Suspense fallback={<RecentUsersFallback />}>
        <RecentUsersList />
      </Suspense>
    </div>
  );
}
