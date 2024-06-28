import Image from "next/image";

export default function ByModelListFallback() {
  return (
    <div className="grid place-content-center h-52">
      <Image
        width={30}
        height={30}
        src="/loading.svg"
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
