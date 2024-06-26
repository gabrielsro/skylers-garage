import Image from "next/image";

export default function Loading() {
  return (
    <div className="grid place-content-center min-h-screen">
      <Image
        src="/loading.svg"
        height={40}
        width={40}
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
