import { Request, Response } from "express";
import { CartModel } from "../domain/models/cart.model";
import { OrderUpdateParams } from "../domain/models/order.model";
import { UserModel } from "../domain/models/user.model";
import orderService from "../domain/services/order.service";
import { CreateOrderInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createOrderController = async (req: Request, res: Response) => {
  const { status }: CreateOrderInput = req.body;
  const cart = await CartModel.findById({ _id: req.body.cart });
  const user = await UserModel.findById({ _id: req.body.user });
  const createOrder = await orderService.createOrderService({
    status,
    cart,
    user,
  });
  user.orders.push(createOrder._id);
  cart.orders.push(createOrder._id);
  await cart.save();
  await createOrder.save();
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

const updateOrderController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, OrderUpdateParams);
  const updateOrder = await orderService.updateOrderService(id, data);
  return res.status(200).json({ order: updateOrder });
};

export {
  createOrderController,
  deleteOrderController,
  findOneOrderController,
  findAllOrderController,
  updateOrderController,
};
