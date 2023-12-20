import { Request, Response } from "express";
import { CartModel } from "../models/cart.model";
import { OrderUpdateParams } from "../models/order.model";
import { UserModel } from "../models/user.model";
import orderService from "../services/order.service";
import { CreateOrderDto } from "../dtos/models";
import { parseRequest } from "./helpers";

const create = async (req: Request, res: Response) => {
  const { status }: CreateOrderDto = req.body;
  try {
    const cart = await CartModel.findById({ _id: req.body.cart });
    const user = await UserModel.findById({ _id: req.body.user });
    const createOrder = await orderService.create({
      status,
      cart,
      user,
    });
    user.orders.push(createOrder._id);
    cart.orders.push(createOrder._id);
    await cart.save();
    await createOrder.save();
    return res.json({ order: createOrder });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    await orderService.deleteById(req.params.id);
    return res.json({ message: "order delete success!!" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getOne = async (req: Request, res: Response) => {
  try {
    const order = await orderService.findById(req.params.id);
    return res.json({ order });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.findAll();
    return res.json({ orders });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, OrderUpdateParams);
  try {
    const updateOrder = await orderService.update(id, data);
    return res.json({ order: updateOrder });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { create, update, remove, getAll, getOne };
