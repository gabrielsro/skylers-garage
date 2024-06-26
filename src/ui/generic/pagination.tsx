"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="grid place-content-center grid-cols-pagination-component">
      <div className="min-w-pic-xs grid place-content-center">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
      </div>
      <div className="flex">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";
          return (
            <PaginationNumber
              key={index}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <div className="min-w-pic-xs grid place-content-center">
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx("flex h-10 w-10 items-center justify-center text-sm", {
    "rounded-l-md": position === "first" || position === "single",
    "rounded-r-md": position === "last" || position === "single",
    "z-10 bg-nord9 text-white": isActive,
    "bg-nord6": !isActive,
    "hover:bg-gray-100": !isActive && position !== "middle",
    "text-nord3": position === "middle",
  });

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md",
    {
      "poninter-events-none text-gray-300": isDisabled,
    }
  );

  return isDisabled ? (
    <div className="className hidden">
      <Image
        height={30}
        width={30}
        alt={`${direction === "right" ? "Right" : "Left"} arrow`}
        src={`/${direction === "left" ? "left" : "right"}-arrow.svg`}
      />
    </div>
  ) : (
    <Link className={className} href={href}>
      <Image
        height={30}
        width={30}
        alt={`${direction === "right" ? "Right" : "Left"} arrow`}
        src={`/${direction === "left" ? "left" : "right"}-arrow.svg`}
      />
    </Link>
  );
}
