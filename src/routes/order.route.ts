import { Router } from "express";
import * as orderController from "../controllers/order.controller";

const OrderRoute = () => {
  const router = Router();
  const prefix: string = "/orders";
  router.post(`${prefix}/create`, orderController.createOrderController);
  router.get(`${prefix}/all`, orderController.findAllOrderController);
  router.get(`${prefix}/:id`, orderController.findOneOrderController);
  router.delete(`${prefix}/:id`, orderController.deleteOrderController);
  return router;
};

export { OrderRoute };
