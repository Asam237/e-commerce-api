import { CreateCartDto } from "../dtos/models";
import { CartModel } from "../models/cart.model";

const create = async (input: CreateCartDto) => {
  return await CartModel.create(input);
};

const deleteById = async (id: any) => {
  return await CartModel.deleteOne({ _id: id });
};

const findById = async (id: any) => {
  return await CartModel.findOne({ _id: id });
};

const findAll = async () => {
  return await CartModel.find();
};

const update = async (id: any, data: any) => {
  if (data !== null) {
    await CartModel.findOneAndUpdate({ _id: id }, data);
  }
  return CartModel.findOne({ _id: id });
};

export default {
  create,
  findAll,
  findById,
  update,
  deleteById,
};
