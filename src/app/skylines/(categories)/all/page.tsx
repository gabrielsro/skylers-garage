import CarsContainer from "@/ui/skylines/cars-container";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: { color?: string; transmission?: string; sort?: string };
}) {
  return (
    <div className="pt-6">
      <p>All</p>
      <Suspense>
        <CarsContainer searchParams={searchParams} model={undefined} />
      </Suspense>
    </div>
  );
}
