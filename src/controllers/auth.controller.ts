import { Request, Response } from "express";
import { CreateUserInput, LoginUserInput } from "../shared/types/models";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import authService from "../domain/services/auth.service";
import { TokenPayload } from "../shared/types/commons";
import { EXPIRES, JWT_SECRET } from "../shared/core/config";

const registerController = async (req: Request, res: Response) => {
  const { email, fullname, role }: CreateUserInput = req.body;
  const password: string = bcrypt.hashSync(req.body.password, 10);
  const createUser = await authService.registerService({
    email,
    fullname,
    password,
    role,
  });

  return res.status(200).json({ user: createUser });
};

const loginController = async (req: Request, res: Response) => {
  const { email, password }: LoginUserInput = req.body;
  const user = await authService.findByEmail(email);
  if (!user) {
    return res.json({ message: "Login failed!" });
  }
  const isMatch: boolean = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Login failed!" });
  }
  const { _id }: any = user;
  const tokenPayload: TokenPayload = {
    id: _id,
  };
  const token = jwt.sign(tokenPayload, JWT_SECRET!!, { expiresIn: EXPIRES!! });
  return res.json({ user, token });
};

const me = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const jsonPayload = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  );
  const user = await authService.findUserById(jsonPayload.id);
  return res.json({ user });
};

export { registerController, loginController, me };
