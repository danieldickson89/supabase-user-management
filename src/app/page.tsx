import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.card}>
          <h2>User Management App</h2>
          <p>I built this to practice adding users to Supabase</p>
        </div>
      </div>
    </main>
  );
}
