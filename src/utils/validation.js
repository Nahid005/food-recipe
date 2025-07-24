import z from "zod";

export const signinformSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "password must be at last 8 characters"}),
})

export const signupformSchema = z.object({
    name: z.string().min(3).max(25),
    email: z.string().min(1, {message: "Email is required"}).email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "password must be at last 8 characters"}),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Your password mismatch",
    path: ["confirmPassword"]
})
