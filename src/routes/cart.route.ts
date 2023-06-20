import { Router } from "express";
import * as cartController from "../controllers/cart.controller";
import { verifyToken } from "../utils/verifyToken";

const CartRoute = () => {
  const router = Router();
  const prefix: string = "/carts";
  router.post(
    `${prefix}/create`,
    verifyToken,
    cartController.createCartController
  );
  router.get(`${prefix}/all`, verifyToken, cartController.findCartController);
  router.get(
    `${prefix}/:id`,
    verifyToken,
    cartController.findOneCartController
  );
  router.put(`${prefix}/:id`, verifyToken, cartController.updateCartController);
  router.delete(
    `${prefix}/:id`,
    verifyToken,
    cartController.deleteCartController
  );
  return router;
};

export { CartRoute };
