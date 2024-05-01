import { config } from "dotenv";
import { connectDB } from "./database/connect.js";
import reportModel from "./models/Data.js";
import ProductJson from "./products.json";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await reportModel.create(ProductJson);
    console.log("Database created successfully");
  } catch (error) {
    console.log(error);
  }
};

config();
start();
