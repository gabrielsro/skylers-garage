import Image from "next/image";
export default function UsersCardStatsFallback() {
  return (
    <div className="grid place-content-center">
      <Image
        height={23}
        width={23}
        src="/loading.svg"
        alt="Loading spinner"
        className="animate-spin"
      />
    </div>
  );
}
