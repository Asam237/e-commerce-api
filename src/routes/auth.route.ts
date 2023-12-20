import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const AuthRoute = () => {
  const router = Router();
  const prefix: string = "/auth";
  router.post(`${prefix}/register`, authController.registerController);
  router.post(`${prefix}/login`, authController.loginController);
  router.get(`${prefix}/me`, authMiddleware, authController.me);
  return router;
};

export { AuthRoute };
