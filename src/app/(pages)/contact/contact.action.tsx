"use server";

import { revalidatePath } from "next/cache";
import db from "@/config/db";
import { messages } from "@/drizzle/schema";

export async function sendMessage(input: {
    name: string;
    email: string;
    subject?: string;
    message: string;
}) {
    try {
        const [result] = await db
            .insert(messages)
            .values({
                name: input.name,
                email: input.email,
                subject: input.subject || null,
                message: input.message,
                status: "unread",
            })
            .$returningId();

        revalidatePath("/admin/messages");
        return { success: true, id: result.id };
    } catch (error) {
        console.error("Failed to create message:", error);
        return { success: false, error: "Could not send message" };
    }
}