import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const ProductRoute = () => {
  const router = Router();
  const prefix: string = "/products";
  router.post(`${prefix}`, authMiddleware, productController.create);
  router.get(`${prefix}`, authMiddleware, productController.getAll);
  router.get(`${prefix}/:id`, authMiddleware, productController.getOne);
  router.put(`${prefix}/:id`, authMiddleware, productController.update);
  router.delete(`${prefix}/delete/:id`, authMiddleware, productController.remove);
  return router;
};

export { ProductRoute };
