"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";

export async function resetPasswordForEmail(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
  };

  await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: "http://localhost:3000/password/change-password",
  });

}
