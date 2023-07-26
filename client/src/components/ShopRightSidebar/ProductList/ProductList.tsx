import classNames from "classnames/bind";
import { ProductSelling, Selected, Wrapper } from "../..";
import { ProductProps, optionSelected } from "../../../typeProps";
import style from "./ProductList.module.scss";

type ProductListProps = {
  selected: any;
  result: string;
  products: ProductProps[];
  placeholder: string;
  options: optionSelected[];
  handleChangeSelected: (e: any) => void;
};
const ProductList = ({
  selected,
  placeholder,
  products,
  options,
  result,
  handleChangeSelected,
}: ProductListProps) => {
  const cx = classNames.bind(style);
  return (
    <div className="col-span-3">
      <Wrapper title="Refer">
        <div className="elementor-widget-container">
          <div className={cx("px-4")}>
            <div
              className={cx(
                "flex",
                "flex-row",
                "items-center",
                "justify-between"
              )}
            >
              <div>{result}</div>
              <Selected
                name="sorting"
                value={selected}
                options={options}
                placeholder={placeholder}
                handleChange={handleChangeSelected}
              />
            </div>
          </div>
          <ul className="product-list">
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => {
                return <ProductSelling key={item._id} data={item} />;
              })}
            </div>
          </ul>
          <div className={cx("text-center")}>1 2 3 4 5 {`>`}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductList;
