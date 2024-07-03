import { fetchCar } from "@/lib/data";

import EditForm from "@/ui/skylines/edit-form";
import Breadcrumbs from "@/ui/generic/breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const car = await fetchCar(id);

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
