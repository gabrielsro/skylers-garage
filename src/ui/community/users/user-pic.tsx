import { fetchUnknownImage } from "@/lib/data";

export default async function UserPic(src: any) {
  const regex = /^https:\/\/example\.com.*/;
  if (!regex.test(src) || !src) {
    src = await fetchUnknownImage();
  }
  return (
    <div className="bg-black grid w-pic-sm h-pic-sm place-content-center rounded-full overflow-hidden">
      <img
        src={src}
        alt="User avatar"
        className="w-pic-inter min-h-pic-inter"
      />
    </div>
  );
}
