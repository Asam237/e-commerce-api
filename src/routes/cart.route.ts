import { Router } from "express";
import * as cartController from "../controllers/cart.controller";

const CartRoute = () => {
  const router = Router();
  const prefix: string = "/carts";
  router.post(`${prefix}/create`, cartController.createCartController);
  router.get(`${prefix}/all`, cartController.findCartController);
  router.get(`${prefix}/:id`, cartController.findOneCartController);
  router.delete(`${prefix}/:id`, cartController.deleteCartController);
  return router;
};

export { CartRoute };
