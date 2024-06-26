import Users from "@/ui/community/users";
import Reviews from "@/ui/community/reviews";
import Forum from "@/ui/community/forum";
import Events from "@/ui/community/events";

export default function Page() {
  return (
    <div className="grid place-content-center min-h-screen grid-cols-2 gap-3 px-6">
      <Users />
      <Reviews />
      <Forum />
      <Events />
    </div>
  );
}
