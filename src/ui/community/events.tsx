import Link from "next/link";
import Image from "next/image";

export default function Events() {
  return (
    <Link href="/community/events">
      <div className="flex gap-2 rounded-md shadow-md">
        <Image height={80} width={80} src="/events.svg" alt="Events" />
        <div>
          <p>Events</p>
        </div>
      </div>
    </Link>
  );
}
