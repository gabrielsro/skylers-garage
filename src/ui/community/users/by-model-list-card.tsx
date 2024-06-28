import Image from "next/image";

export default function ByModelListCard({
  user,
}: {
  user: { name: string; src: string; location: string; id: string };
}) {
  return (
    <div className="flex items-center rounded-md gap-1">
      <div className="grid place-content-center min-w-pic-xs h-pic-xs rounded-full bg-black overflow-hidden">
        <Image width={20} height={20} alt="User avatar" src="/user.svg" />
      </div>
      <div className="overflow-hidden overflow-ellipsis">
        <p>{user.name}</p>
        <p className="text-xs text-nord1">{user.location}</p>
      </div>
    </div>
  );
}
