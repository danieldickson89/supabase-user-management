import { login, signup } from "./actions";
import Link from "next/link";
import styles from "../page.module.css";

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <Link href="/password/forgot-password">Forgot Password?</Link>
    </div>
  );
}
