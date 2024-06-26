import Link from "next/link";
import Image from "next/image";

export default function Reviews() {
  return (
    <Link href="/community/reviews">
      <div className="flex gap-2 rounded-md shadow-md">
        <Image height={80} width={80} src="/reviews.svg" alt="Reviews" />
        <div>
          <p>Reviews</p>
          <p>{`Total`}</p>
        </div>
      </div>
    </Link>
  );
}
