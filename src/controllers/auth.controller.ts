import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { loginType, registerType } from "../shared/types/models";
import { findByEmail, registerService } from "../domain/services/auth.service";
import { TokenPayload } from "../shared/types/commons";
import { EXPIRES, JWT_SECRET } from "../shared/core/config";

const registerController = async (req: Request, res: Response) => {
  const { createdAt, email, fullname, role }: registerType = req.body;
  const password: string = bcrypt.hashSync(req.body.password, 10);
  const createUser = await registerService({
    createdAt,
    email,
    fullname,
    password,
    role,
  });
  return res.status(200).json({ user: createUser });
};

const loginController = async (req: Request, res: Response) => {
  const { email, password }: loginType = req.body;
  const user = await findByEmail(email);
  if (!user) {
    return res.status(200).json({ message: "Login failed!" });
  }
  const isMatch: boolean = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(200).json({ message: "Login failed!" });
  }
  const { _id }: any = user;
  const tokenPayload: TokenPayload = {
    id: _id,
  };
  const token = jwt.sign(tokenPayload, JWT_SECRET!!, { expiresIn: EXPIRES!! });
  return res.status(200).json({ ...user, token: tokenPayload });
};

export { registerController, loginController };
