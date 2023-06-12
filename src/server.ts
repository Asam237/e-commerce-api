import express, { Application } from "express";
import { AuthRoute } from "./routes/auth.route";

export const setupRestEndpoint = (app: Application) => {
  const router = express.Router();
  app.use("/", router);
  app.use("/", AuthRoute());
};
