import RecentUsers from "@/ui/community/users/recent-users";
import ByModel from "@/ui/community/users/by-model";
import RecentUsersFallback from "@/ui/community/users/recent-users-fallback";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen grid place-content-center bg-slate-500 px-1">
      <div className="grid gap-2 grid-cols-recent-users-model-tempate bg-nord11 w-screen place-content-center">
        <RecentUsers />
        <ByModel />
      </div>
    </div>
  );
}
