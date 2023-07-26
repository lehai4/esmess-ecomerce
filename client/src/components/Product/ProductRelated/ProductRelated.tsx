import classNames from "classnames/bind";
import { ProductSelling, Reference } from "../..";
import { useAppSelector } from "../../../hooks/hooks";
import { handleLimitedShowProduct } from "../../../utils/handleLimitedShowProduct";
import style from "./ProductRelated.module.scss";
const ProductRelated = () => {
  const products = useAppSelector((state) => state.products.product);
  const cx = classNames.bind(style);
  return (
    <div>
      <h3
        className={cx(
          "px-4",
          "pb-10",
          "text-3xl",
          "font-normal",
          "tracking-wide"
        )}
      >
        Related products
      </h3>
      <Reference>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {handleLimitedShowProduct(products, 4).map((item) => {
            return <ProductSelling key={item._id} data={item} />;
          })}
        </div>
      </Reference>
    </div>
  );
};

export default ProductRelated;
