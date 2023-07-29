import { Router } from "express";
import * as orderController from "../controllers/order.controller";
import { verifyToken } from "../utils/verifyToken";

const OrderRoute = () => {
  const router = Router();
  const prefix: string = "/orders";
  router.post(`${prefix}/create`, verifyToken, orderController.create);
  router.get(`${prefix}/all`, verifyToken, orderController.getAll);
  router.get(`${prefix}/:id`, verifyToken, orderController.getOne);
  router.put(`${prefix}/:id`, verifyToken, orderController.update);
  router.delete(`${prefix}/:id`, verifyToken, orderController.remove);
  return router;
};

export { OrderRoute };
