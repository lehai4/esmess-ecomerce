import { SvgIcon } from "@mui/material";
import classNames from "classnames/bind";
import { MdAdjust } from "react-icons/md";
import { Button, Grid, Section } from "../..";
import { ProductProps, imageProps, optionSelected } from "../../../typeProps";
import Selected from "../../Form/Selected";
import styles from "./ProductView.module.scss";
import ProductRelated from "../ProductRelated/ProductRelated";
import ProductAdditional from "../ProductAdditional/ProductAdditional";
type ProductViewProp = {
  product: ProductProps;
  active: number;
  color: imageProps;
  quantity: number;
  selected: any;
  option: optionSelected[];
  handleClick: () => void;
  handleChangeSelected: (e: any) => void;
  handleQuantity: (type: string) => void;
  handleChangeColor: (e: any, i: number) => void;
};
interface label {
  index: number;
  name: string;
}
const labelViewBottom: label[] = [
  { index: 0, name: "Description" },
  { index: 1, name: "Additional information" },
  { index: 2, name: "Reviews" },
];
const ProductView = ({
  product,
  active,
  option,
  selected,
  color,
  quantity,
  handleChangeColor,
  handleClick,
  handleQuantity,
  handleChangeSelected,
}: ProductViewProp) => {
  const cx = classNames.bind(styles);

  return (
    <Section title="product-view">
      <main className={cx("product")}>
        <div className={cx("product-view")}>
          <div className={cx("product-view-top")}>
            <div className={cx("-mx-7")}>
              <Grid col={2} mdCol={2} smCol={1} gap={18}>
                <div className={cx("product-view-top-image")}>
                  <figure className={cx("flex", "flex-row-reverse")}>
                    <img className={cx("mx-4")} src={`${color.url}`} alt="" />
                    <div className={cx("product-thumbnails-wrapper")}>
                      {product.imageUrl
                        .filter((item) => {
                          return item.id_img !== color.id_img;
                        })
                        .map((url) => (
                          <div key={url.id_img} className={cx("image")}>
                            <img src={`${url.url}`} alt="" />
                          </div>
                        ))}
                    </div>
                  </figure>
                </div>
                <div className={cx("product-view-top-summary")}>
                  <h1 className={cx("mb-2", "text-5xl")}>{product.name}</h1>
                  <p className={cx("price")}>$ {product.price}.00</p>
                  <div className={cx("mt-9", "w-96")}>
                    <p>
                      Integer vel turpis et est ultrices rhoncus. Proin eu
                      euismod nisi. Nulla ultrices placerat aliquam. Fusce ac
                      sapien dolor. Curabitur auctor. Nam magna mi, consectetur.
                    </p>
                  </div>
                  <form className={cx("mt-11")}>
                    <div
                      className={cx(
                        "px-4",
                        "py-2",
                        "flex",
                        "justify-between",
                        "items-center",
                        "border",
                        "rounded",
                        "border-current",
                        "w-80"
                      )}
                    >
                      <label>Color</label>
                      <div>
                        {product.imageUrl.map((item, i) => (
                          <SvgIcon
                            key={i}
                            name="color"
                            component={MdAdjust}
                            style={{ color: `${item.color}` }}
                            className={cx(
                              `${
                                active === item.id_img ? "active" : "icon-color"
                              }`
                            )}
                            onClick={() => handleChangeColor(item, item.id_img)}
                          />
                        ))}
                      </div>
                    </div>
                    <div
                      className={cx(
                        "px-4",
                        "my-4",
                        "flex",
                        "justify-between",
                        "items-center",
                        "border",
                        "rounded",
                        "border-current",
                        "w-80"
                      )}
                    >
                      <label>Size</label>
                      <div className={cx("option-size")}>
                        <Selected
                          name="size"
                          placeholder="Choose option size"
                          handleChange={handleChangeSelected}
                          value={selected}
                          options={option}
                        />
                      </div>
                    </div>
                    <div
                      className={cx(
                        "flex",
                        "flex-row",
                        "items-center",
                        "justify-between",
                        "mt-9",
                        "w-100"
                      )}
                    >
                      <div className={cx("flex", "flex-row", "items-center")}>
                        <span
                          className={cx(
                            "border",
                            "border-current",
                            "py-2",
                            "p-4"
                          )}
                        >
                          {quantity}
                        </span>
                        <div className={cx("flex", "flex-col")}>
                          <span
                            className={cx(
                              "border",
                              "border-current",
                              "px-3",
                              "py-0\\2",
                              "leading-none",
                              "cursor-pointer"
                            )}
                            onClick={() => handleQuantity("plus")}
                          >
                            +
                          </span>
                          <span
                            className={cx(
                              "border",
                              "border-current",
                              "px-3\\6",
                              "py-0\\1",
                              "leading-none",
                              "cursor-pointer"
                            )}
                            onClick={() => handleQuantity("minus")}
                          >
                            -
                          </span>
                        </div>
                      </div>
                      <div className={cx("w-auto")}>
                        <Button
                          text="Add to cart"
                          style={{
                            padding: 12,
                            color: "white",
                            backgroundColor: "#111",
                            border: "1px solid #111",
                            width: 200,
                            textTransform: "uppercase",
                            fontWeight: 500,
                            fontSize: 14,
                            letterSpacing: "0.35em",
                          }}
                          icon=""
                          handleClick={handleClick}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </Grid>
            </div>
          </div>
          <div className={cx("product-view-bottom", "pt-32")}>
            <ProductAdditional
              product={product}
              labelViewBottom={labelViewBottom}
            />
          </div>
        </div>
        <div className={cx("product-related", "pt-16")}>
          <ProductRelated />
        </div>
      </main>
    </Section>
  );
};

export default ProductView;
