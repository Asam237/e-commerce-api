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

export default {
  createProductService,
  deleteProductService,
  findOneProductService,
};
