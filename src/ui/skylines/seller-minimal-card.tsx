import Image from "next/image";
import { fetchSeller } from "@/lib/data";
import UserPic from "../community/users/user-pic";

export default async function SellerMinimalCard({
  seller,
}: {
  seller: {
    name?: string | undefined;
    id: string | undefined;
  };
}) {
  const soldBy = await fetchSeller(seller);

  return (
    <div className="flex gap-4 justify-center">
      <div className="flex items-center gap-1">
        <UserPic src={soldBy?.src} minimal={true} />
        <p className="text-lg text-nord10">{soldBy?.name}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-xl text-nord13 font-extrabold">{soldBy?.rating}</p>
        <Image src="/star3.svg" height={38} width={38} alt="Seller's rating" />
      </div>
    </div>
  );
}
