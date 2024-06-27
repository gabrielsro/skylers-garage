import Image from "next/image";
import { ReactNode } from "react";

export default function RecentUsersFallback(): ReactNode {
  return (
    <div className="place-self-center">
      <Image
        height={50}
        width={50}
        src="/loading.svg"
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
