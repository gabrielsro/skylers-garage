"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex fixed w-screen justify-around bg-nord10">
      <Link
        href="/"
        className={clsx("hover:text-nord4", {
          "text-nord7": pathname === "/",
        })}
      >
        Home
      </Link>
      <Link
        href="/services"
        className={clsx("hover:text-nord4", {
          "text-nord-7": pathname === "/services",
        })}
      >
        Services
      </Link>
      <Link
        href="/pricing"
        className={clsx("hover:text-nord4", {
          "text-nord-7": pathname === "/pricing",
        })}
      >
        Pricing
      </Link>
      <Link
        href="spare-parts"
        className={clsx("hover:text-nord4", {
          "text-nord7": pathname === "/spare-parts",
        })}
      >
        Spare Parts
      </Link>
      <Link
        href="/contact"
        className={clsx("hover:text-nord4", {
          "text-nord7": pathname === "/contact",
        })}
      >
        Contact
      </Link>
      <Link
        href="/skylines"
        className={clsx("hover:text-nord4", {
          "text-nord7": pathname === "/skylines",
        })}
      >
        Skylines
      </Link>
    </nav>
  );
}
