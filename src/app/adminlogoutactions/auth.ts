// Logout functinality
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Logs out the user by clearing the session cookie
 * and redirecting to the login page.
 */
export async function logout() {
  // Delete the session cookie (adjust the cookie name if you use a different one)
  const cookieStore = await cookies();
  cookieStore.delete("auth-token");
  // If you use a different cookie name, e.g. "next-auth.session-token" for NextAuth, delete that:
  // cookieStore.delete("next-auth.session-token");
  // cookieStore.delete("next-auth.csrf-token");

  // Redirect to the login page (change to "/register" if needed)
  redirect("/login");
}
