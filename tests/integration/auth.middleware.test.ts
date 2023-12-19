import request from "supertest";
import { server } from "../../index";
import { UserModel } from "../../src/domain/models/user.model";

let serverInstance: any;

describe("auth middleware", () => {
  let token: string;
  beforeEach(async () => {
    serverInstance = server;
    token = `Bearer ${new UserModel().generateAuthToken()}`;
  });
  afterEach(async () => {
    await serverInstance.close();
  });

  const exec = () => {
    return request(serverInstance)
      .post("/products")
      .set("authorization", token)
      .send({});
  };

  it("should return 401 if no token is provided", async () => {
    token = "";

    const res = await exec();

    expect(res.status).toBe(401);
  });

  it("should return 400 if token is invalid", async () => {
    token = "invalid";

    const res = await exec();

    expect(res.status).toBe(400);
  });
});
