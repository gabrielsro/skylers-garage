import CarsContainer from "@/ui/skylines/cars-container";

export default async function Page({
  searchParams,
}: {
  searchParams?: { color?: string; transmission?: string; sort?: string };
}) {
  return (
    <div className="pt-6">
      <p>R34</p>
      <CarsContainer searchParams={searchParams} model={"R34"} />
    </div>
  );
}
