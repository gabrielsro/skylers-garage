"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import NavbarLogout from "./navbar-logout";

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
        href="/community"
        className={clsx("hover:text-nord4", {
          "text-nord-7": pathname === "/community",
        })}
      >
        Community
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
        Parts
      </Link>
      <Link
        href="/skylines"
        className={clsx("hover:text-nord4", {
          "text-nord7": pathname === "/skylines",
        })}
      >
        Skylines
      </Link>
      <Link
        href="/contact"
        className={clsx("hover:text-nord4", {
          "text-nord7": pathname === "/contact",
        })}
      >
        Contact
      </Link>
    </nav>
  );
}
