import { CreateProductInput } from "../../shared/types/models";
import { ProductModel } from "../models/product.model";

const create = async (input: CreateProductInput) => {
  return await ProductModel.create(input);
};

const deleteById = async (id: any) => {
  return await ProductModel.deleteOne({ _id: id });
};

const findById = async (id: any) => {
  return await ProductModel.findOne({ _id: id });
};

const findAll = async () => {
  return await ProductModel.find();
};

const findByService = async (id: any, populate: any) => {
  return await ProductModel.find({ user: id }).populate(populate);
};

const update = async (id: any, data: any) => {
  if (data !== null) {
    return await ProductModel.findOneAndUpdate({ _id: id }, data);
  }
  return await ProductModel.findOne({ _id: id });
};

export default {
  create,
  deleteById,
  findById,
  findByService,
  findAll,
  update,
};
