import express, { Application } from "express";
import * as bodyParser from "body-parser";
import { AuthRoute } from "./routes/auth.route";

export const setupRestEndpoint = (app: Application) => {
  const router = express.Router();
  app.use(bodyParser.json());
  app.use("/", router);
  app.use("/", AuthRoute());
};
