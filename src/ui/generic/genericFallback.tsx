import Image from "next/image";

export default function GenericFallback({ size }: { size: number }) {
  return (
    <div className="grid place-content-center">
      <Image
        width={size}
        height={size}
        src="/loading.svg"
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
