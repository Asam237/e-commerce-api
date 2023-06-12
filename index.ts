import express from "express";
import { setupRestEndpoint } from "./src/server";
import { connectToDB } from "./src/shared/core/database";
import * as http from "http";
import { PORT } from "./src/shared/core/config";

const startServer = () => {
  const app = express();
  setupRestEndpoint(app);
  const server: http.Server = http.createServer(app);
  server.listen(PORT!!, async () => {
    await connectToDB();
    console.log(`[server]: is running to ${PORT}`);
  });
};

void (() => {
  startServer();
})();
