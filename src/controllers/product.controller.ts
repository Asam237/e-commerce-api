import { Request, Response } from "express";
import { UserModel } from "../domain/models/user.model";
import productService from "../domain/services/product.service";
import { CreateProductInput } from "../shared/types/models";

const createProductController = async (req: Request, res: Response) => {
  const { costUnity, name, quantityAvailabe }: CreateProductInput = req.body;
  const user = await UserModel.findById({ _id: req.body.user });
  const createProduct = await productService.createProductService({
    costUnity,
    name,
    quantityAvailabe,
    user,
  });
  return res.status(200).json({ product: createProduct });
};

export { createProductController };
        