"use client";
import { useDebouncedCallback } from "use-debounce";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="flex justify-center gap-2 items-center">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="pl-2"
      />
      <Image height={25} width={25} src="/loupe.svg" alt="Magnifying glass" />
    </div>
  );
}
