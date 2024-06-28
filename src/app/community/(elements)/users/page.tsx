import RecentUsers from "@/ui/community/users/recent-users";
import ByModel from "@/ui/community/users/by-model";
import RecentUsersFallback from "@/ui/community/users/recent-users-fallback";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen grid place-content-center px-1 pt-8 bg-nord-5">
      <div className="grid grid-cols-recent-users-model-tempate w-screen place-content-center overflow-hidden">
        <RecentUsers />
        <ByModel />
      </div>
    </div>
  );
}
