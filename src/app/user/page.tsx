import { createClient } from "../../../utils/supabase/server";
import ErrorPage from "../error/page";
import styles from "../page.module.css";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className={styles.center}>
        <div className={styles.card}>
          <h2>User Details:</h2>
          <p>User Id: {user?.id}</p>
          <p>User Email: {user?.email}</p>
        </div>
      </div>
    );
  } else {
    return <ErrorPage></ErrorPage>;
  }
}
