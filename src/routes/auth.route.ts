import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const AuthRoute = () => {
  const router = Router();
  const prefix: string = "/auth";
  router.post(`${prefix}/register`, authController.registerController);
  router.post(`${prefix}/login`, authController.loginController);
  return router;
};

export { AuthRoute };
