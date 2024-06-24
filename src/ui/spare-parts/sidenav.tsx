"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="grid items-center bg-nord5 px-5 py-20">
      <Link
        href="/spare-parts/brakes"
        className={clsx("text-nord-0", {
          "text-nord12": pathname === "/spare-parts/brakes",
        })}
      >
        <p>Brakes</p>
      </Link>
      <Link
        href="/spare-parts/engine-components"
        className={clsx("text-nord-0", {
          "text-nord12": pathname === "/spare-parts/engine-components",
        })}
      >
        <p>Engine Components</p>
      </Link>
      <Link
        href="/spare-parts/transmission"
        className={clsx("text-nord-0", {
          "text-nord12": pathname === "/spare-parts/transmission",
        })}
      >
        <p>Transmission</p>
      </Link>
      <Link
        href="/spare-parts/steering"
        className={clsx("text-nord-0", {
          "text-nord12": pathname === "/spare-parts/steering",
        })}
      >
        <p>Steering</p>
      </Link>
    </div>
  );
}
