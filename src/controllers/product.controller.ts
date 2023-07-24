import { Request, Response } from "express";
import { ProductUpdateParams } from "../domain/models/product.model";
import { UserModel } from "../domain/models/user.model";
import productService from "../domain/services/product.service";
import { CreateProductInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createProductController = async (req: Request, res: Response) => {
  const { costUnity, name, quantityAvailabe }: CreateProductInput = req.body;
  try {
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
    return res.json({ product: createProduct });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findOneProductController = async (req: Request, res: Response) => {
  try {
    const product = await productService.findOneProductService(req.params.id);
    return res.json({ product });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    await productService.deleteProductService(req.params.id);
    return res.json({ message: "Product delete success!!!" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findProductController = async (req: Request, res: Response) => {
  try {
    const products = await productService.findProductService();
    return res.json({ products });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findProductControllerByUser = async (req: Request, res: Response) => {
  try {
    const products = await productService.findProductServiceByUser(
      req.user.id,
      "user"
    );
    return res.json({ products });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, ProductUpdateParams);
  try {
    const updateProduct = await productService.updateProductService(id, data);
    return res.json({ product: updateProduct });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export {
  createProductController,
  findOneProductController,
  findProductController,
  deleteProductController,
  findProductControllerByUser,
  updateProductController,
};
