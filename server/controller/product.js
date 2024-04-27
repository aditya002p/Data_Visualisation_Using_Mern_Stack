const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "i am get all products Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
