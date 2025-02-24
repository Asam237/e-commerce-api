import express from "express";
import { PORT } from "./src/setup/config";
import { setupRestEndPoint } from "./src/setupRestEndPoint";

const app = express();
setupRestEndPoint(app);

export const server = app.listen(PORT, () => {
  console.log(`[Server]: running to ${PORT}`);
});
