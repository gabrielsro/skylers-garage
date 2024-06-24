"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-auto justify-center bg-nord6 px-4 gap-3">
      <Link
        href={"/skylines/all"}
        className={clsx("text-nord0", {
          "text-nord7": pathname === "/skylines/all",
        })}
      >
        All
      </Link>
      <Link
        href={"/skylines/r32"}
        className={clsx("text-nord0", {
          "text-nord7": pathname === "/skylines/r32",
        })}
      >
        R32
      </Link>
      <Link
        href={"/skylines/r33"}
        className={clsx("text-nord0", {
          "text-nord7": pathname === "/skylines/r33",
        })}
      >
        R33
      </Link>
      <Link
        href={"/skylines/r34"}
        className={clsx("text-nord0", {
          "text-nord7": pathname === "/skylines/r34",
        })}
      >
        R34
      </Link>
    </div>
  );
}
