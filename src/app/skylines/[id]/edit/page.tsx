import { fetchCar } from "@/lib/data";
import { notFound } from "next/navigation";
import EditForm from "@/ui/skylines/edit-form";
import Breadcrumbs from "@/ui/generic/breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const car = await fetchCar(id);

  if (!car) {
    console.log("NOT FOUNDDDDDD");
    notFound();
  }

  return (
    <main className="min-h-screen grid place-content-center bg-nord-4 py-10">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Skylines", href: "/skylines" },
          { label: "Edit vehicle", href: `/skylines/${id}/edit`, active: true },
        ]}
      />
      <EditForm car={car} />
    </main>
  );
}
