"use server";

import { createClient } from "../../../../utils/supabase/server";

export async function changePassword(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    password: formData.get("password") as string,
  };

  const user = await supabase.auth.updateUser({ password: data.password });
  // Check if we get a user back, and then let's route them to the Account page or something
  if (user) {
    console.log("UPDATED PASSWORD FOR USER: ", user);
  }
}
