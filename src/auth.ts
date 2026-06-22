//  integrate this NextAuth config with the login page and ensure Google sign-in redirects to admin dashboard.
// Google Auth and Sign in via  Google credentials

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/config/db";
import * as schema from "@/drizzle/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: schema.users as any,
    accountsTable: schema.accounts as any,
    sessionsTable: schema.sessions as any,
    verificationTokensTable: schema.verificationTokens as any,
  }),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // Optionally pass role to session if needed
        // session.user.role = (user as any).role;
      }
      return session;
    },
  },
});
