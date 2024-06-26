import Link from "next/link";

export default function Page() {
  return (
    <div className="grid place-content-center min-h-screen">
      <Link href="/skylines/all">
        <div>
          <p>All</p>
        </div>
      </Link>

      <Link href="/skylines/r32">
        <div>
          <p>R32</p>
        </div>
      </Link>

      <Link href="/skylines/r33">
        <div>
          <p>R33</p>
        </div>
      </Link>

      <Link href="/skylines/r34">
        <div>
          <p>R34</p>
        </div>
      </Link>
    </div>
  );
}
