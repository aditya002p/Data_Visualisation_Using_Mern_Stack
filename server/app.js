require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database/connect");
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/product");

app.get("/", (req, res) => {
  res.send("hi i am live");
});

//middleware or to set the routes

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} yes i am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();