import RecentUsersList from "./recent-users-list";
import RecentUsersFallback from "./recent-users-fallback";
import { Suspense } from "react";
export default function RecentUsers() {
  return (
    <div className=" min-h-lg px-1">
      <p>New Users</p>
      <Suspense fallback={<RecentUsersFallback />}>
        <RecentUsersList />
      </Suspense>
    </div>
  );
}
