import { CreateProductInput } from "../../shared/types/models";
import { ProductModel } from "../models/product.model";

const createProductService = async (input: CreateProductInput) => {
  return await ProductModel.create(input);
};

const deleteProductService = async (id: any) => {
  return await ProductModel.deleteOne({ _id: id });
};

const findOneProductService = async (id: any) => {
  return await ProductModel.findOne({ _id: id });
};

const findProductService = async () => {
  return await ProductModel.find();
};

const findProductServiceByUser = async (id: any, populate: any) => {
  return await ProductModel.find({ user: id }).populate(populate);
};

const updateProductService = async (id: any, data: any) => {
  if (data !== null) {
    return await ProductModel.findOneAndUpdate({ _id: id }, data);
  }
  return await ProductModel.findOne({ _id: id });
};

export default {
  createProductService,
  deleteProductService,
  findOneProductService,
  findProductService,
  findProductServiceByUser,
  updateProductService,
};
