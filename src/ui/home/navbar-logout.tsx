import { signOut } from "@/auth";

export default async function NavbarLogout() {
  return (
    <form
      className="absolute right-0 bg-nord11"
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
