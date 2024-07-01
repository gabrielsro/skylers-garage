import CarsContainer from "@/ui/skylines/cars-container";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    color?: string;
    transmission?: string;
    sort?: string;
    page?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const query = {
    color: searchParams?.color ? searchParams.color : undefined,
    transmission: searchParams?.transmission
      ? searchParams.transmission
      : undefined,
    sort: searchParams?.sort ? searchParams.sort : undefined,
  };

  return (
    <div className="pt-6">
      <Suspense>
        <CarsContainer query={query} model={undefined} currentPage={page} />
      </Suspense>
    </div>
  );
}
