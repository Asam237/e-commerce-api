import { Router } from "express";
import countryController from "../controllers/country.controller";

export const CountriesRoute = () => {
  const router = Router();
  const prefix: string = "/countries";
  router.get(`${prefix}`, countryController.getAllCountries);
  return router;
};
