import Breadcrumbs from "@/ui/generic/breadcrumbs";
import UploadForm from "@/ui/skylines/upload-form";

export default function Page() {
  return (
    <main className="min-h-screen grid place-content-center bg-nord-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Cars", href: "/skylines" },
          { label: "Upload Car", href: "/skylines/create", active: true },
        ]}
      />
      <UploadForm />
    </main>
  );
}
