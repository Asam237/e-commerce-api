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

const updateOrderService = async (id: any, data: any) => {
  if (data !== null) {
    return await OrderModel.findOneAndUpdate({ _id: id }, data);
  }
  return await OrderModel.findOne({ _id: id });
};

export default {
  createOrderService,
  deleteOrderService,
  findOneOrderService,
  findAllOrderService,
  updateOrderService,
};
