import Image from "next/image";
import { fetchUnknownImage } from "@/lib/data";

export default async function UserPic(src: any, minimal: boolean | undefined) {
  const regex = /^https:\/\/example\.com.*/;
  let newSrc;
  if (!regex.test(src) || !src) {
    newSrc = await fetchUnknownImage();
  }
  return (
    <div className="bg-black grid w-pic-sm h-pic-sm place-content-center rounded-full overflow-hidden">
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
