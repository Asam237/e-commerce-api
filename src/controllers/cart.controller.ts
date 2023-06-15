import { Request, Response } from "express";
import { ProductModel } from "../domain/models/product.model";
import cartService from "../domain/services/cart.service";
import { CreateCartInput } from "../shared/types/models";

const createCartController = async (req: Request, res: Response) => {
  const { quantity }: CreateCartInput = req.body;
  const product = await ProductModel.findById({ _id: req.body.cart });
  const createCart = await cartService.createCartService({
    quantity,
    product,
  });
  return res.status(200).json({ cart: createCart });
};

const deleteCartController = async (req: Request, res: Response) => {
  await cartService.deleteCartService(req.params.id);
  return res.status(200).json({ message: "cart delete success!!!" });
};

const findOneCartController = async (req: Request, res: Response) => {
  const cart = await cartService.findOneCartService(req.params.id);
  return res.status(200).json({ cart });
};

const findCartController = async (req: Request, res: Response) => {
  const carts = await cartService.findAllCartService();
  return res.status(200).json({ carts });
};

export {
  createCartController,
  deleteCartController,
  findOneCartController,
  findCartController,
};
