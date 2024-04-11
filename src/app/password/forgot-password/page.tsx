import { resetPasswordForEmail } from "./actions";

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <button formAction={resetPasswordForEmail}>Reset Password</button>
      </form>
    </div>
  );
}
