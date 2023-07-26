const Product = require("../models/Product");

function countOccurrences(arr) {
  return arr.reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}
const categoryController = {
  // [GET]/category
  getCategory: async (req, res) => {
    try {
      const products = await Product.find();

      const arrCategory = products.map((product) => {
        return product.category;
      });
      let countArray = countOccurrences(arrCategory);
      const objectArray = Object.entries(countArray);

      let result = objectArray.map(([key, value]) => {
        return {
          category: key,
          count: value,
        };
      });

      return res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = categoryController;
