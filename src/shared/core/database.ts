import { connect, connection } from "mongoose";
import { MONGO_URI } from "./config";

export const connectToDB = () => {
  try {
    connect(MONGO_URI!!).then(() =>
      console.log(`[mongodb]: connected to ${connection.db.databaseName}`),
    );
  } catch (error) {
    throw new Error(error);
  }
};

connection.on("disconnected", () => {
  console.log(`[mongodb]: disconnected`);
});

connection.on("error", (error) => {
  console.log(`[mongodb]: error to ${error}`);
});
