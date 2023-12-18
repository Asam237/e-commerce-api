import express from "express";
import { setupRestEndpoint } from "./src/server";
import { PORT } from "./src/shared/core/config";
import { connectToDB } from "./src/shared/core/database";

const app = express();
setupRestEndpoint(app);
connectToDB();
export const server = app.listen(PORT, () => {
  console.log(`[server]: listening on port ${PORT}`);
});
