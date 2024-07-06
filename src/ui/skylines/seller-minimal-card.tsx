import { fetchSeller } from "@/lib/data";
import UserPic from "../community/users/user-pic";

export default async function SellerMinimalCard({
  seller,
}: {
  seller: { name?: string | undefined; id: string | undefined };
}) {
  const soldBy = await fetchSeller(seller);

  return (
    <div>
      <div className="flex items-center gap-1">
        <UserPic src={soldBy?.src} />
        <p className="text-lg text-nord10">{soldBy?.name}</p>
      </div>
    </div>
  );
}
