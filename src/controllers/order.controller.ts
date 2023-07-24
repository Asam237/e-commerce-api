import { Request, Response } from "express";
import { CartModel } from "../domain/models/cart.model";
import { OrderUpdateParams } from "../domain/models/order.model";
import { UserModel } from "../domain/models/user.model";
import orderService from "../domain/services/order.service";
import { CreateOrderInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const createOrderController = async (req: Request, res: Response) => {
  const { status }: CreateOrderInput = req.body;
  try {
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
    return res.json({ order: createOrder });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const deleteOrderController = async (req: Request, res: Response) => {
  try {
    await orderService.deleteOrderService(req.params.id);
    return res.status({ message: "order delete success!!" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findOneOrderController = async (req: Request, res: Response) => {
  try {
    const order = await orderService.findOneOrderService(req.params.id);
    return res.json({ order });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const findAllOrderController = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.findAllOrderService();
    return res.json({ orders });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateOrderController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, OrderUpdateParams);
  try {
    const updateOrder = await orderService.updateOrderService(id, data);
    return res.json({ order: updateOrder });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export {
  createOrderController,
  deleteOrderController,
  findOneOrderController,
  findAllOrderController,
  updateOrderController,
};
