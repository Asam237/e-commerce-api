import { Request, Response } from "express";
import { CartUpdateParams } from "../domain/models/cart.model";
import { ProductModel } from "../domain/models/product.model";
import cartService from "../domain/services/cart.service";
import { CreateCartInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createCartController = async (req: Request, res: Response) => {
  const { quantity }: CreateCartInput = req.body;
  const product = await ProductModel.findById({ _id: req.body.product });
  const createCart = await cartService.createCartService({
    quantity,
    product,
  });
  product.carts.push(createCart._id);
  await product.save();
  await createCart.save();
  return res.json({ cart: createCart });
};

const deleteCartController = async (req: Request, res: Response) => {
  await cartService.deleteCartService(req.params.id);
  return res.json({ message: "cart delete success!!!" });
};

const findOneCartController = async (req: Request, res: Response) => {
  const cart = await cartService.findOneCartService(req.params.id);
  return res.json({ cart });
};

const findCartController = async (req: Request, res: Response) => {
  const carts = await cartService.findAllCartService();
  return res.json({ carts });
};

const updateCartController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, CartUpdateParams);
  const updateCart = await cartService.updateCartService(id, data);
  return res.json({ cart: updateCart });
};

export {
  createCartController,
  deleteCartController,
  findOneCartController,
  findCartController,
  updateCartController,
};
