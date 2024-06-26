import Link from "next/link";
import Image from "next/image";
import UsersCardStats from "./users-card-stats";
import { Suspense } from "react";
import UsersCardStatsFallback from "./users-card-stats-fallback";

export default function Users() {
  return (
    <Link href="/community/users">
      <div className="flex gap-2 rounded-md shadow-md">
        <Image height={80} width={80} src="/users.svg" alt="Users" />
        <div className="grid grid-cols-1">
          <p>Users</p>
          <div className="place-self-center">
            <Suspense fallback={<UsersCardStatsFallback />}>
              <UsersCardStats />
            </Suspense>
          </div>
        </div>
      </div>
    </Link>
  );
}
