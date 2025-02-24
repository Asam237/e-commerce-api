import { Router } from "express";
import iftarController from "../controllers/iftar.controller";

export const IftarRoute = () => {
  const router = Router();
  const prefix: string = "/iftar-time";
  router.get(`${prefix}`, iftarController.getIftarTime);
  return router;
};
