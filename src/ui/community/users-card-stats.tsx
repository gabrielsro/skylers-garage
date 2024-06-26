import { fetchUserCount } from "@/lib/data";

export default async function UsersCardStats() {
  const count = await fetchUserCount();
  return (
    <div>
      <p>{`Total: ${count}`}</p>
      <p>{`Online:`}</p>
    </div>
  );
}
