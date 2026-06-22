import { z } from "zod";

/* ---------------- REGISTER ---------------- */

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .max(100, "Name cannot exceed 100 characters"),

    email: z
      .string()
      .email("Please enter a valid email address")
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password cannot exceed 100 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase and a number",
      ),

    confirmPassword: z.string(),

    // 👇 Use string + refine for safe custom error
    role: z.string().refine((val) => ["admin", "editor"].includes(val), {
      message: "Please select a valid role",
    }),

    // (optional) if you send the 'terms' checkbox
    // terms: z.boolean().refine(v => v === true, "You must agree to the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;

/* ---------------- LOGIN ---------------- */

export const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase and a number",
    ),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
