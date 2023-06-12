import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: ["ADMIN", "METIER"],
    default: "METIER",
  },
});

const UserModel = mongoose.model("User", userSchema);
const userUpdateParams: string[] = ["fullname", "email", "password", "role"];

export { UserModel, userUpdateParams };
