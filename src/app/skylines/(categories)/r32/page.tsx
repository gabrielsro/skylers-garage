import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page({
  searchParams,
}: {
  searchParams?: { color?: string; transmission?: string; sort?: string };
}) {
  return (
    <div className="pt-6">
      <p>R32</p>
      {/* <CarsContainer searchParams={searchParams} model={"R32"} /> */}
    </div>
  );
}
