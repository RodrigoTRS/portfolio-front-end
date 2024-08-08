import { z } from "zod"

const envSchema = z.object({
    APP_ENV: z.enum(["development", "production"]).default("development"),
    DEV_BACKEND_URL: z.string(),
    PROD_BACKEND_URL: z.string(),
    RESEND_API_KEY: z.string()
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    throw new Error("Failed on parsing env variables.")
}

export const env = _env.data