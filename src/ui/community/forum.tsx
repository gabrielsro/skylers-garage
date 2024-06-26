import Link from "next/link";
import Image from "next/image";

export default function Forum() {
  return (
    <Link href="/community/forum">
      <div className="flex gap-2 rounded-md shadow-md">
        <Image height={80} width={80} src="/forum.svg" alt="Forum" />
        <div>
          <p>Forum</p>
        </div>
      </div>
    </Link>
  );
}
