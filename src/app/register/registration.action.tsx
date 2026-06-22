// app/register/register.action.ts
"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import db from "@/config/db";
import { users } from "@/drizzle/schema";
import { hash } from "@node-rs/argon2";

interface RegisterUserParams {
    name: string,
    email: string;
    password: string;
    role: 'admin' | 'editor';   // 👈 added
}

export async function registerUserAction(params: RegisterUserParams) {
    try {
        const { name, email, password, role } = params;

        // 1️⃣ Check if user already exists
        const [existingUser] = await db
            .select()
            .from(users)
            .where(eq(users.email, email));

        if (existingUser) {
            return {
                success: false,
                message: "Email already exists",
            };
        }

        // 2️⃣ Hash password
        const hashedPassword = await hash(password);

        // 3️⃣ Insert new user with role
        const [result] = await db
            .insert(users)
            .values({
                name,
                email,
                password: hashedPassword,
                role,               // 👈 store role
            })
            .$returningId();

        if (!result) {
            return {
                success: false,
                message: "User registration failed",
            };
        }

        revalidatePath("/register");

        return {
            success: true,
            data: { id: result.id },
        };
    } catch (error) {
        console.error("Registration error:", error);
        return {
            success: false,
            message: "Something went wrong",
        };
    }
}