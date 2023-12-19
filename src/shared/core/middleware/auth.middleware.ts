import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config";

export const authMiddleware = async (
  req: Request & { user: any },
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access to this resource requires authentication" });
  }

  try {
    req.user = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    return next();
  } catch (err: any) {
    res.status(400).json({ message: "Invalid token" });
  }
};
