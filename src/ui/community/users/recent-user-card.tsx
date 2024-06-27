import { Recent } from "@/lib/definitions";
import UserPic from "./user-pic";
import { Suspense } from "react";
import UserPicFallback from "./user-pic-fallback";

export default function RecentUserCard({ recent }: { recent: Recent }) {
  return (
    <div className="whitespace-nowrap rounded-sm flex items-center gap-1 pl-1 py-1 pr-1 shadow-md w-full overflow-hidden">
      <div>
        <Suspense fallback={<UserPicFallback />}>
          <UserPic src={recent.src} />
        </Suspense>
      </div>
      <div>
        <p>{recent.name}</p>
        <p className="text-nord1 text-sm">{recent.location}</p>
      </div>
    </div>
  );
}
