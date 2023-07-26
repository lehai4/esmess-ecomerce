import React, { useState } from "react";
import { ProductProps } from "../../../typeProps";
import Description from "../Description";
import Information from "../Information";
import Reviews from "../Reviews/Reviews";
import classNames from "classnames/bind";
import style from "./ProductAdditional.module.scss";
interface label {
  index: number;
  name: string;
}
type ProductAdditionalProps = {
  product: ProductProps;
  labelViewBottom: label[];
};

const ProductAdditional = ({
  product,
  labelViewBottom,
}: ProductAdditionalProps) => {
  const cx = classNames.bind(style);
  const [active, setActive] = useState<number>(0);
  return (
    <React.Fragment>
      <div className={cx("product-additional", "border-b")}>
        <div
          className={cx(
            "flex",
            "flex-row",
            "items-center",
            "justify-center",
            "gap-8"
          )}
        >
          {labelViewBottom.map((item, i) => (
            <div
              key={i}
              className={cx(
                `${item.index === active ? `relative` : ""}`,
                "border-current",
                "text-xl",
                "py-3",
                "tracking-wide",
                "cursor-pointer"
              )}
              onClick={() => setActive(item.index)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={cx("my-10", "mx-auto", "max-w-screen-lg")}>
        {active == 0 ? (
          <Description />
        ) : active == 1 ? (
          <Information />
        ) : (
          <Reviews product={product} />
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductAdditional;
