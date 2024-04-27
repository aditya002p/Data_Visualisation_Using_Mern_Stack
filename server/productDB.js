require("dotenv").config();
const connectDB = require("./database/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

start();
