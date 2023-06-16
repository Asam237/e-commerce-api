import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { verifyToken } from "../utils/verifyToken";

const ProductRoute = () => {
  const router = Router();
  const prefix: string = "/products";
  router.post(
    `${prefix}/create`,
    verifyToken,
    productController.createProductController
  );
  router.get(
    `${prefix}/all`,
    verifyToken,
    productController.findProductControllerByUser
  );
  router.get(
    `${prefix}/:id`,
    verifyToken,
    productController.findOneProductController
  );
  router.delete(
    `${prefix}/:id`,
    verifyToken,
    productController.deleteProductController
  );
  return router;
};

export { ProductRoute };
