import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested vehicle</p>
      <Link
        href="/skylines/all"
        className="bg-nord9 rounded-md py-2 self-center px-7 text-white font-semibold mt-4"
      >
        Go to Skylines
      </Link>
    </main>
  );
}
