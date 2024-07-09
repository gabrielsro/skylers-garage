"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/lib/actions";

export default function LoginForm() {
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined
  // );

  const [formState, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction}>
      <h1>Please log in to continue</h1>
      <div className="grid grid-cols-form-format gap-2 pt-10">
        <label htmlFor="email" className="justify-self-end">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <label htmlFor="password" className="justify-self-end">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <div className="pt-1 flex col-span-2 justify-end">
          <button type="submit">Submit</button>
        </div>
      </div>
      {formState && (
        <div className="pt-5">
          <p>{formState}</p>
        </div>
      )}
    </form>
  );
}
