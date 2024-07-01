import CarsContainer from "@/ui/skylines/cars-container";

export default function Page({
  searchParams,
}: {
  searchParams?: { color?: string; transmission?: string; sort?: string };
}) {
  return (
    <div className="pt-6">
      <p>All</p>
      {/* <CarsContainer searchParams={searchParams} model={undefined} /> */}
    </div>
  );
}
