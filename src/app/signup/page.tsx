import { createUser } from "@/lib/actions";

export default function Page() {
  return (
    <div className="min-h-screen grid place-content-center">
      <form action={createUser} className="grid grid-cols-form-format gap-2">
        <label htmlFor="name" className="justify-self-end">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <label htmlFor="email" className="justify-self-end">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="justify-self-end">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter a password"
        />
        <div className="flex justify-end w-full col-span-2 pt-1">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
