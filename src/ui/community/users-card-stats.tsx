import { fetchUserCount } from "@/lib/data";

export default async function UsersCardStats() {
  const count = await fetchUserCount();
  return (
    <div className="place-self-center">
      <p>{`Total: ${count}`}</p>
      <p>{`Online:`}</p>
    </div>
  );
}
