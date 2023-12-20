import { config } from "dotenv";

config();

export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET;
export const EXPIRES = process.env.EXPIRES || "1h";
