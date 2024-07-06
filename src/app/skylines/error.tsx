"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen grid place-content-center">
      <div className="flex flex-col gap-10 pb-10">
        <h2 className="text-4xl text-nord2">Something broke...</h2>
        <button
          className="bg-nord9 rounded-md py-2 self-center px-7 text-white font-semibold"
          onClick={() => reset()}
        >
          Try again?
        </button>
      </div>
    </main>
  );
}
