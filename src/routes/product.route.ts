import { Router } from "express";
import * as productController from "../controllers/product.controller";

const ProductRoute = () => {
  const router = Router();
  const prefix: string = "/products";
  router.post(`${prefix}/create`, productController.createProductController);
  return router;
};

export { ProductRoute };
