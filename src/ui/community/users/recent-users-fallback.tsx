import Image from "next/image";
import { ReactNode } from "react";

export default function RecentUsersFallback(): ReactNode {
  return (
    <div className="grid place-content-center h-full">
      <Image
        height={30}
        width={30}
        src="/loading.svg"
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
