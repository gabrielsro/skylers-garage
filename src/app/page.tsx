import Skyline from "@/ui/_home/skyline1.jpg";
import { lusitana } from "@/ui/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-7 pt-20 w-screen">
      <h1
        className={`font-bold text-3xl text-nord0 w-screen text-center px-1 ${lusitana.className}`}
      >
        Welcome to Skyler's Garage. Here you'll find anything you want related
        to Nissan Skylines
      </h1>
      <Image
        src="/skyline1.jpg"
        width={1000}
        height={565}
        className="sm:block md:hidden"
        alt="Image of a black Nissan Skyline R33"
      />
      <Image
        src="/skyliner34wallpaperback.jpg"
        width={1920}
        height={1080}
        className="hidden sm:block"
        alt="Image of a silver Nissan Skyline R34 from the rear"
      />
    </main>
  );
}
