import { config } from "dotenv";
import { existsSync } from "fs";

if (existsSync(".env")) {
  console.log("Using .env file to supply config environment variables");
  config({ path: ".env" });
} else {
  process.exit(1);
}

export const ENVIRONMENT = process.env.NODE_ENV;

export const SPOTIFY_CLIENT_ID = process.env["SPOTIFY_CLIENT_ID"];
export const SPOTIFY_CLIENT_SECRET = process.env["SPOTIFY_CLIENT_SECRET"];
