"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SortFilterBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  function handleSort(val: string) {
    params.set("page", "1");
    if (val) {
      params.set("sort", val);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}/?${params.toString()}`);
  }
  function handleTransmission(val: string) {
    params.set("page", "1");
    if (val && val !== "All") {
      params.set("transmission", val);
    } else {
      params.delete("transmission");
    }
    replace(`${pathname}/?${params.toString()}`);
  }
  function handleColor(val: string) {
    params.set("page", "1");
    if (val && val !== "All") {
      params.set("color", val);
    } else {
      params.delete("color");
    }
    replace(`${pathname}/?${params.toString()}`);
  }

  return (
    <div className="flex w-full gap-5 lg:justify-center">
      <select
        name="sort"
        id="sort"
        className="lg:max-w-full max-w-select-filter-bar overflow-hidden overflow-ellipsis rounded-md pl-2 py-1 bg-nord4"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option hidden={true} selected={params.get("sort") === null}>
          Sort By
        </option>
        <option value="price-ASC">Price Lowest to Highest</option>
        <option value="price-DESC">Price Highest to Lowest</option>
        <option value="year-DESC">Newest to Oldest</option>
        <option value="year-ASC">Oldest to Newest</option>
        <option value="mileage-DESC">Mileage Highest to Lowest</option>
        <option value="mileage-ASC">Mileage Lowest to Highest</option>
      </select>

      <select
        name="mileage"
        id="mileage"
        className="overflow-hidden overflow-ellipsis rounded-md pl-2 bg-nord4 pr-2"
        onChange={(e) => handleTransmission(e.target.value)}
      >
        <option hidden={true} selected={params?.get("transmission") === null}>
          Transmission
        </option>
        <option value={undefined}>All</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>

      <select
        name="color"
        id="color"
        className="overflow-hidden overflow-ellipsis rounded-md pl-2 bg-nord4"
        onChange={(e) => handleColor(e.target.value)}
      >
        <option hidden={true} selected={params?.get("color") === null}>
          Color
        </option>
        <option value={undefined}>All</option>
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="Brown">Brown</option>
        <option value="Green">Green</option>
        <option value="Pink">Pink</option>
        <option value="Red">Red</option>
        <option value="Silver">Silver</option>
        <option value="White">White</option>
        <option value="Yellow">Yellow</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
