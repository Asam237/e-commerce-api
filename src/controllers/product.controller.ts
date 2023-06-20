import { Request, Response } from "express";
import { ProductUpdateParams } from "../domain/models/product.model";
import { UserModel } from "../domain/models/user.model";
import productService from "../domain/services/product.service";
import { CreateProductInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createProductController = async (req: Request, res: Response) => {
  const { costUnity, name, quantityAvailabe }: CreateProductInput = req.body;
  const user = await UserModel.findById({ _id: req.body.user });
  const createProduct = await productService.createProductService({
    costUnity,
    name,
    quantityAvailabe,
    user,
  });
  user.products.push(createProduct._id);
  await user.save();
  await createProduct.save();
  return res.status(200).json({ product: createProduct });
};

const findOneProductController = async (req: Request, res: Response) => {
  const product = await productService.findOneProductService(req.params.id);
  return res.status(200).json({ product });
};

const deleteProductController = async (req: Request, res: Response) => {
  await productService.deleteProductService(req.params.id);
  return res.status(200).json({ message: "Product delete success!!!" });
};

const findProductController = async (req: Request, res: Response) => {
  const products = await productService.findProductService();
  return res.status(200).json({ products });
};

const findProductControllerByUser = async (req: Request, res: Response) => {
  const products = await productService.findProductServiceByUser(
    req.user.id,
    "user"
  );
  return res.status(200).json({ products });
};

const updateProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, ProductUpdateParams);
  const updateProduct = await productService.updateProductService(id, data);
  return res.status(200).json({ product: updateProduct });
};

export {
  createProductController,
  findOneProductController,
  findProductController,
  deleteProductController,
  findProductControllerByUser,
  updateProductController,
};
