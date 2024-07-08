export default function LoginForm() {
  return (
    <form action="">
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
      </div>
    </form>
  );
}
