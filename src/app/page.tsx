import Link from "next/link";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.card}>
          <h2>User Management App</h2>
          <p>I built this to practice adding users to Supabase</p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.card}>
          <p>
            <Link href="/login">Login or Signup</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
