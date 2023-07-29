import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config";
import { TokenPayload } from "../../types/commons";

const decodeJwtToken = (
  token: string,
  jwtSecret: string
): Promise<jwt.JwtPayload> => {
  return new Promise((resolve, reject): void => {
    jwt.verify(token, jwtSecret, (err: jwt.VerifyErrors | null, decoded) => {
      if (err) {
        reject(err);
      }

      resolve(decoded as jwt.JwtPayload);
    });
  });
};

export const authMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const decoded = (await decodeJwtToken(
        token.replace("Bearer ", ""),
        JWT_SECRET
      )) as TokenPayload | undefined;

      if (!decoded?.id) {
        return res
          .status(401)
          .json({ message: "Access to this resource requires authentication" });
      }

      req.user = decoded;

      return next();
    } catch (err: any) {
      const isJwtError = err instanceof jwt.JsonWebTokenError;

      if (!isJwtError) {
        console.log("error");
      }
    }
  }

  return res
    .status(401)
    .json({ message: "Access to this resource requires authentication" });
};
