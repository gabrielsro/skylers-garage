import Link from "next/link";
import clsx from "clsx";

type Breadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex w-full bg-green-300 gap-5">
        {breadcrumbs.map((b, index) => {
          return (
            <li
              key={b.href}
              aria-current={b.active}
              className={clsx(b.active ? "text-nord10" : "text-nord3")}
            >
              <Link href={b.href}>{b.label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
