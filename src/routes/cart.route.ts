import { Router } from "express";
import * as cartController from "../controllers/cart.controller";
import { authMiddleware } from "../shared/core/middleware/auth.middleware";

const CartRoute = () => {
  const router = Router();
  const prefix: string = "/carts";
  router.post(`${prefix}/create`, authMiddleware, cartController.create);
  router.get(`${prefix}/all`, authMiddleware, cartController.getAll);
  router.get(`${prefix}/:id`, authMiddleware, cartController.getOne);
  router.put(`${prefix}/:id`, authMiddleware, cartController.update);
  router.delete(`${prefix}/:id`, authMiddleware, cartController.remove);
  return router;
};

export { CartRoute };
