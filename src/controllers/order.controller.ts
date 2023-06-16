import { Request, Response } from "express";
import { CartModel } from "../domain/models/cart.model";
import { UserModel } from "../domain/models/user.model";
import orderService from "../domain/services/order.service";
import { CreateOrderInput } from "../shared/types/models";

const createOrderController = async (req: Request, res: Response) => {
  const { status }: CreateOrderInput = req.body;
  const cart = await CartModel.findById({ _id: req.body.cart });
  const user = await UserModel.findById({ _id: req.body.user });
  const createOrder = await orderService.createOrderService({
    status,
    cart,
    user,
  });
  return res.status(200).json({ order: createOrder });
};

const deleteOrderController = async (req: Request, res: Response) => {
  await orderService.deleteOrderService(req.params.id);
  return res.status({ message: "order delete success!!" });
};

const findOneOrderController = async (req: Request, res: Response) => {
  const order = await orderService.findOneOrderService(req.params.id);
  return res.status(200).json({ order });
};

const findAllOrderController = async (req: Request, res: Response) => {
  const orders = await orderService.findAllOrderService();
  return res.status(200).json({ orders });
};

export {
  createOrderController,
  deleteOrderController,
  findOneOrderController,
  findAllOrderController,
};
