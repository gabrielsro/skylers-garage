import clsx from "clsx";
import Image from "next/image";
import { fetchUnknownImage } from "@/lib/data";

export default async function UserPic({
  src,
  minimal,
}: {
  src: any;
  minimal?: boolean | undefined;
}) {
  const regex = /^https:\/\/example\.com.*/;
  let newSrc;
  if (regex.test(src) || !src) {
    newSrc = await fetchUnknownImage();
  }

  return (
    <div
      className={`bg-black grid place-content-center rounded-full overflow-hidden ${clsx(
        minimal && "h-pic-minimal-sm w-pic-minimal-sm",
        !minimal && "h-pic-sm w-pic-sm"
      )}`}
    >
      {newSrc && (
        <img
          src={newSrc}
          alt="User avatar"
          className="w-pic-inter min-h-pic-inter"
        />
      )}
    </div>
  );
}
