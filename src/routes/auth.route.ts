import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { verifyToken } from "../utils/verifyToken";

const AuthRoute = () => {
  const router = Router();
  const prefix: string = "/auth";
  router.post(`${prefix}/register`, authController.registerController);
  router.post(`${prefix}/login`, authController.loginController);
  router.get(`${prefix}/me`, verifyToken, authController.me);
  return router;
};

export { AuthRoute };
