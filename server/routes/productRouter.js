const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/productController");

// get
router.get("/", productController.getProducts);

//generate Product
router.post("/generate", productController.generateProduct);

module.exports = router;
