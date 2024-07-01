import SideNav from "@/ui/skylines/sidenav";
import SortFilterBar from "@/ui/generic/sortFilterBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-side-nav min-h-screen">
      <SideNav />
      <div className="flex flex-col pt-12">
        <SortFilterBar />
        {children}
      </div>
    </div>
  );
}
