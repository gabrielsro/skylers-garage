import Link from "next/link";
import Image from "next/image";
import UsersCardStats from "./users-card-stats";
import { Suspense } from "react";

export default function Users() {
  return (
    <Link href="/community/users">
      <div className="flex gap-2 rounded-md shadow-md">
        <Image height={80} width={80} src="/users.svg" alt="Users" />
        <div>
          <p>Users</p>
          <Suspense>
            <UsersCardStats />
          </Suspense>
        </div>
      </div>
    </Link>
  );
}
