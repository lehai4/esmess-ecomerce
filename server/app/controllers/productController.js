const Product = require("../models/Product");

const productController = {
  // [GET]/products
  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //[Create]/product
  generateProduct: async (req, res) => {
    try {
      //Create new product
      const newProduct = await new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
      });
      //Save user to DB
      const product = await newProduct.save();
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = productController;
