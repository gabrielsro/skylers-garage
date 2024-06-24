import SideNav from "@/ui/spare-parts/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-side-nav">
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
