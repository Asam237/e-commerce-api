import express, { Application } from "express";
import { IftarRoute } from "./routes/iftar.route";
import { CountriesRoute } from "./routes/country.route";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger.json";

export const setupRestEndPoint = (app: Application) => {
  app.use(express.json());
  app.use("/", IftarRoute());
  app.use("/", CountriesRoute());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};
