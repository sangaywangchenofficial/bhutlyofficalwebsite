"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import db from "@/config/db";
import { users } from "@/drizzle/schema";
import { verify } from "@node-rs/argon2";

interface LoginParams {
    email: string;
    password: string;
}

export async function loginUserAction(params: LoginParams) {
    try {
        const { email, password } = params;

        // 1️⃣ Find user by email
        const [user] = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

        if (!user || !user.password) {
            return {
                success: false,
                message: "Invalid email or password",
            };
        }

        // 2️⃣ Verify password using Argon2
        const isValid = await verify(user.password, password);

        if (!isValid) {
            return {
                success: false,
                message: "Invalid email or password",
            };
        }

        // 3️⃣ Return user data (exclude password)
        const { password: _, ...userWithoutPassword } = user;

        // Optional: revalidate any cached pages
        revalidatePath("/login");

        return {
            success: true,
            data: userWithoutPassword, // contains id, name, email, role, etc.
        };
    } catch (error) {
        console.error("Login error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}