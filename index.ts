import express from "express";
import * as http from "http";
import { setupRestEndpoint } from "./src/server";
import { PORT } from "./src/shared/core/config";
import { connectToDB } from "./src/shared/core/database";

const startServer = async () => {
  const app = express();
  setupRestEndpoint(app);
  const server: http.Server = http.createServer(app);
  server.listen(PORT!!, async () => {
    await connectToDB();
    console.log(`[server]: running to ${PORT}`);
  });
};

void (() => {
  startServer();
})();
