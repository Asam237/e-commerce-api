import express, { Application } from "express";
import { AuthRoute } from "./routes/auth.route";
import { ProductRoute } from "./routes/product.route";
import { CartRoute } from "./routes/cart.route";
import { OrderRoute } from "./routes/order.route";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger.json";

export const setupRestEndpoint = (app: Application) => {
  app.use(express.json());
  app.use("/", AuthRoute());
  app.use("/", ProductRoute());
  app.use("/", CartRoute());
  app.use("/", OrderRoute());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};
