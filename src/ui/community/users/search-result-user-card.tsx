import Image from "next/image";
import { UsersResult } from "@/lib/definitions";

export default function SearchResultUserCard({ user }: { user: UsersResult }) {
  const regex = /^https:\/\/example\.com*/;
  let hasSrc;
  if (!regex.test(user.src)) {
    hasSrc = true;
  }
  if (!user.src) {
    hasSrc = false;
  }

  return (
    <div className="flex items-center justify-between px-1 py-1 bg-white rounded-sm">
      <div className="flex gap-2 w-1/2">
        <div>
          {!hasSrc && (
            <div className="bg-black rounded-full overflow-hidden w-pic-sm">
              <Image height={50} width={50} src="/user.svg" alt="User avatar" />
            </div>
          )}
        </div>
        <div className="overflow-hidden">
          <p className="truncate text-lg">{user.name}</p>
          <p className="truncate text-nord-1">{user.location}</p>
        </div>
      </div>
      <div>
        <p className="text-xs">Member since:</p>
        <p>
          {new Date(user.created_at).toLocaleString("en-US", {
            timeZone: "UTC",
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
      </div>
      <div>
        <Image height={35} width={35} src="/star.svg" alt="Star" />
        <p className="text-center text-sm">{user.rating}</p>
      </div>
    </div>
  );
}
