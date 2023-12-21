import mongoose from "mongoose";
import { Request, Response } from "express";
import { UserModel } from "../../src/models/user.model";
import { authMiddleware } from "../../src/middlewares/auth.middleware";

interface AuthRequest extends Request {
  header: jest.Mock;
  user: any;
}

describe(`auth middleware`, () => {
  it(`should populate req.user with the payload of a valid JWT`, () => {
    const user = {
      id: new mongoose.Types.ObjectId().toHexString(),
    };
    const token = new UserModel(user).generateAuthToken();
    const req = {
      header: jest.fn().mockReturnValue(token),
    } as AuthRequest;
    const res = {} as Response;
    const next = jest.fn();

    authMiddleware(req, res, next);

    expect(req.user).toBeTruthy();
  });
});
