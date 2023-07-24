import { Request, Response } from "express";
import { CartUpdateParams } from "../domain/models/cart.model";
import { ProductModel } from "../domain/models/product.model";
import cartService from "../domain/services/cart.service";
import { CreateCartInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createCartController = async (req: Request, res: Response) => {
  const { quantity }: CreateCartInput = req.body;
  try {
    const product = await ProductModel.findById({ _id: req.body.product });
    const createCart = await cartService.createCartService({
      quantity,
      product,
    });
    product.carts.push(createCart._id);
    await product.save();
    await createCart.save();
    return res.json({ cart: createCart });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const deleteCartController = async (req: Request, res: Response) => {
  try {
    await cartService.deleteCartService(req.params.id);
    return res.json({ message: "cart delete success!!!" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findOneCartController = async (req: Request, res: Response) => {
  try {
    const cart = await cartService.findOneCartService(req.params.id);
    return res.json({ cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findCartController = async (req: Request, res: Response) => {
  try {
    const carts = await cartService.findAllCartService();
    return res.json({ carts });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateCartController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, CartUpdateParams);
  try {
    const updateCart = await cartService.updateCartService(id, data);
    return res.json({ cart: updateCart });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export {
  createCartController,
  deleteCartController,
  findOneCartController,
  findCartController,
  updateCartController,
};
