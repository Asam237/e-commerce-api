import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgres://asam:asam@localhost:5432/asam`,
  },
});
