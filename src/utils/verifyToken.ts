import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../shared/core/config";

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader: any = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET!!, (error: any, user: any) => {
      if (error) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  }
};
