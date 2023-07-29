import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { verifyToken } from "../utils/verifyToken";

const ProductRoute = () => {
  const router = Router();
  const prefix: string = "/products";
  router.post(`${prefix}/create`, verifyToken, productController.create);
  router.get(`${prefix}/all`, verifyToken, productController.getAll);
  router.get(`${prefix}/:id`, verifyToken, productController.getOne);
  router.put(`${prefix}/:id`, verifyToken, productController.update);
  router.delete(`${prefix}/:id`, verifyToken, productController.remove);
  return router;
};

export { ProductRoute };
