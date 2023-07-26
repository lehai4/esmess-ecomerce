const express = require("express");
const router = express.Router();
const categoryController = require("../app/controllers/categoryController");
// [get]/category
router.get("/", categoryController.getCategory);

module.exports = router;
