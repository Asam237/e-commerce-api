import { Router } from "express";
import * as cartController from "../controllers/cart.controller";
import { verifyToken } from "../utils/verifyToken";

const CartRoute = () => {
  const router = Router();
  const prefix: string = "/carts";
  router.post(`${prefix}/create`, verifyToken, cartController.create);
  router.get(`${prefix}/all`, verifyToken, cartController.getAll);
  router.get(`${prefix}/:id`, verifyToken, cartController.getOne);
  router.put(`${prefix}/:id`, verifyToken, cartController.update);
  router.delete(`${prefix}/:id`, verifyToken, cartController.remove);
  return router;
};

export { CartRoute };
