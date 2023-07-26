const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");
function routes(app) {
  app.use("/v1/products", productRouter);
  app.use("/v1/category", categoryRouter);
}
module.exports = routes;
