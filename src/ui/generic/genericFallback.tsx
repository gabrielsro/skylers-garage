import Image from "next/image";

export default function GenericFallback({ size }: { size: number }) {
  return (
    <div className="animate-spin">
      <Image
        width={size}
        height={size}
        src="/loading.svg"
        alt="Loading spinner"
      />
    </div>
  );
}
