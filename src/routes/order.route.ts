import { Router } from "express";
import * as orderController from "../controllers/order.controller";
import { verifyToken } from "../utils/verifyToken";

const OrderRoute = () => {
  const router = Router();
  const prefix: string = "/orders";
  router.post(
    `${prefix}/create`,
    verifyToken,
    orderController.createOrderController
  );
  router.get(
    `${prefix}/all`,
    verifyToken,
    orderController.findAllOrderController
  );
  router.get(
    `${prefix}/:id`,
    verifyToken,
    orderController.findOneOrderController
  );
  router.put(
    `${prefix}/:id`,
    verifyToken,
    orderController.updateOrderController
  );
  router.delete(
    `${prefix}/:id`,
    verifyToken,
    orderController.deleteOrderController
  );
  return router;
};

export { OrderRoute };
