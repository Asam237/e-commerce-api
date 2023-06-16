import { CreateOrderInput } from "../../shared/types/models";
import { OrderModel } from "../models/order.model";

const createOrderService = async (input: CreateOrderInput) => {
  return await OrderModel.create(input);
};

const deleteOrderService = async (id: any) => {
  return await OrderModel.deleteOne({ _id: id });
};

const findOneOrderService = async (id: any) => {
  return await OrderModel.findOne({ _id: id });
};

const findAllOrderService = async () => {
  return await OrderModel.find();
};

export default {
  createOrderService,
  deleteOrderService,
  findOneOrderService,
  findAllOrderService,
};
