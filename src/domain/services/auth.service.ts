import { registerType } from "../../shared/types/models";
import { UserModel } from "../models/user.model";

const registerService = async (input: registerType) => {
  return await UserModel.create(input);
};

const findByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};

export { registerService, findByEmail };
