import Image from "next/image";

export default function UserPicFallback() {
  return (
    <div className="grid h-pic-sm w-pic-sm place-content-center">
      <Image
        height={20}
        width={20}
        src="/loading.svg"
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
