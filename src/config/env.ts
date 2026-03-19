import { envSchema } from "../schemas/envSchema";
import * as dotenv from 'dotenv';

const isProduction = process.env.NODE_ENV === "production";
if(!isProduction) dotenv.config();

const validatedEnv = envSchema.parse(process.env);

const configuredOrigins = (process.env.FRONTEND_ORIGINS ?? process.env.FRONTEND_ORIGIN ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = Array.from(
  new Set([
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://candleaf-front.vercel.app',
    ...configuredOrigins,
  ])
);

const requiredEnvVars = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
  "JWT_RESET_SECRET",
  "SESSION_SECRET",
  "NODE_ENV",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_SECRET_ID",
  "SUPPORT_EMAIL",
];

if (isProduction) {
  requiredEnvVars.push("SENDGRID_API_KEY");
}

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
    process.exit(1);
  }
});

export const ENV = {
  MONGO_URI: validatedEnv.MONGO_URI!,
  JWT_SECRET: validatedEnv.JWT_SECRET!,
  JWT_RESET_SECRET: validatedEnv.JWT_RESET_SECRET!,
  SESSION_SECRET: validatedEnv.SESSION_SECRET!,
  GOOGLE_CLIENT_ID: validatedEnv.GOOGLE_CLIENT_ID!,
  GOOGLE_SECRET_ID: validatedEnv.GOOGLE_SECRET_ID!,
  SUPPORT_EMAIL: validatedEnv.SUPPORT_EMAIL!,
  SENDGRID_API_KEY: validatedEnv.SENDGRID_API_KEY,
  PORT: Number(validatedEnv.PORT),
  NODE_ENV: isProduction ? "production" : "development",
};

export const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};
