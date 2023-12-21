import { Request, Response } from "express";
import { CartUpdateParams } from "../models/cart.model";
import { ProductModel } from "../models/product.model";
import cartService from "../services/cart.service";
import { CreateCartDto } from "../dtos/models";
import { parseRequest } from "./helpers";

const create = async (req: Request, res: Response) => {
  const { quantity }: CreateCartDto = req.body;
  try {
    const product = await ProductModel.findById({ _id: req.body.product });
    const createCart = await cartService.create({
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

const remove = async (req: Request, res: Response) => {
  try {
    await cartService.deleteById(req.params.id);
    return res.json({ message: "cart delete success!!!" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getOne = async (req: Request, res: Response) => {
  try {
    const cart = await cartService.findById(req.params.id);
    return res.json({ cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const carts = await cartService.findAll();
    return res.json({ carts });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, CartUpdateParams);
  try {
    const updateCart = await cartService.update(id, data);
    return res.json({ cart: updateCart });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { create, update, remove, getOne, getAll };
