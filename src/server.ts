import express, { Application } from "express";
import * as bodyParser from "body-parser";
import { AuthRoute } from "./routes/auth.route";
import { ProductRoute } from "./routes/product.route";
import { CartRouter } from "./routes/cart.route";

export const setupRestEndpoint = (app: Application) => {
  const router = express.Router();
  app.use(bodyParser.json());
  app.use("/", router);
  app.use("/", AuthRoute());
  app.use("/", ProductRoute());
  app.use("/", CartRouter());
};
