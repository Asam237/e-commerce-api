import { Router } from "express";
import * as orderController from "../controllers/order.controller";
import { authMiddleware } from "../shared/core/middleware/auth.middleware";

const OrderRoute = () => {
  const router = Router();
  const prefix: string = "/orders";
  router.post(`${prefix}`, authMiddleware, orderController.create);
  router.get(`${prefix}`, authMiddleware, orderController.getAll);
  router.get(`${prefix}/:id`, authMiddleware, orderController.getOne);
  router.put(`${prefix}/:id`, authMiddleware, orderController.update);
  router.delete(`${prefix}/:id`, authMiddleware, orderController.remove);
  return router;
};

export { OrderRoute };
