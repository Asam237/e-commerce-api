import { Request, Response } from "express";
import { CreateUserDto, LoginUserDto } from "../dtos/models";
import * as bcrypt from "bcryptjs";
import authService from "../services/auth.service";

const registerController = async (req: Request, res: Response) => {
  const { email, fullname, role }: CreateUserDto = req.body;
  try {
    const password: string = bcrypt.hashSync(req.body.password, 10);
    const createUser = await authService.registerService({
      email,
      fullname,
      password,
      role,
    });

    return res.status(200).json({ user: createUser });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const loginController = async (req: Request, res: Response) => {
  // const { email, password }: LoginUserDto = req.body;
  // try {
  //   const user = await authService.findByEmail(email);
  //   if (!user) {
  //     return res.json({ message: "login failed!" });
  //   }
  //   const isMatch: boolean = bcrypt.compareSync(password, user.password);
  //   if (!isMatch) {
  //     return res.status(400).json({ message: "login failed!" });
  //   }
  //   const token = user.generateAuthToken();
  //   return res.json({ user, token });
  // } catch (error) {
  //   return res.status(400).json({ error });
  // }
};

const me = async (req: Request & { user: any }, res: Response) => {
  try {
    const user = await authService.findUserById(req.user.id);
    return res.json({ user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { registerController, loginController, me };
