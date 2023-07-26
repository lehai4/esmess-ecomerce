const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    category: {
      type: String,
      require: true,
      max: 20,
    },
    price: {
      type: Number,
      require: true,
    },
    imageUrl: [
      {
        id_img: {
          type: Number,
          require: true,
        },
        url: {
          type: String,
          require: true,
        },
        color: {
          type: String,
          require: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
