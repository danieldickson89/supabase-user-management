import { changePassword } from "./actions";

export default async function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="password">new password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={changePassword}>Update Password</button>
      </form>
    </div>
  );
}
