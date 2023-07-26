import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@mui/material";
import classNames from "classnames/bind";
import { Fragment, useState } from "react";
import { MdAdjust } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductProps } from "../../../typeProps";
import { convertPath } from "../../../utils/formatPath";
import styles from "./ProductSelling.module.scss";

type ProductSellingProps = {
  data: ProductProps;
};

const ProductSelling = (props: ProductSellingProps) => {
  const [color, setColor] = useState({ ...props.data.imageUrl[0] });
  const [active, setActive] = useState(0);
  const cx = classNames.bind(styles);
  const handleChangeColor = (e: any, i: number) => {
    setColor(e);
    setActive(i);
  };
  return (
    <li className={cx("product-list__item")}>
      <Link
        to={`/product/${convertPath(props.data.name)}`}
        style={{
          position: "absolute",
          bottom: 84,
          right: 15,
          left: 15,
        }}
      >
        {props.data.imageUrl.map((item, i) => {
          if (item.color === color.color) {
            return (
              <Fragment key={i}>
                <img src={item.url} alt={props.data.name} />
              </Fragment>
            );
          }
        })}
      </Link>
      <div className={cx("product-image")}>
        {props.data.imageUrl.map((item, i) => {
          if (item.color === color.color) {
            return (
              <Fragment key={i}>
                <img src={item.url} alt={props.data.name} />
              </Fragment>
            );
          }
        })}
        <div className={cx("product-image-inner")}>
          <Link
            to={`/product/${convertPath(props.data.name)}`}
            className={cx("button", "add_to_cart_button")}
          >
            Add to cart
          </Link>
          <div className={cx("product-additional-content")}>
            <span className={cx("line")}></span>
            <div className={cx("product-additional-content__view")}>
              <button className={cx("product-additional-content__view-icon")}>
                <i className="fa-regular fa-eye"></i>
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
            <div className={cx("product-additional-content__heart")}>
              <button className={cx("product-additional-content__view-icon")}>
                <i className="fa-regular fa-heart"></i>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("product-content")}>
        <div className={cx("product-content__title")}>
          <Link
            to={`/product/${convertPath(props.data.name)}`}
            className={cx(
              "mb-1.5",
              "text-2xl",
              "leading-5",
              "tracking-wider",
              "block"
            )}
          >
            {props.data.name}
          </Link>
          <div className={cx("product-content__category")}>
            <Link
              to={`/category/${props.data.category}`}
              rel="tag"
              target="_blank"
            >
              {props.data.category}
            </Link>
          </div>
        </div>
        <div className={cx("text-xl", "tracking-widen", "font-thin")}>
          $ {props.data.price}.00
        </div>
        <div className={cx("product-content__color")}>
          {props.data.imageUrl.length > 1 ? (
            props.data.imageUrl.map((item, i) => (
              <SvgIcon
                key={i}
                component={MdAdjust}
                style={{ color: `${item.color}` }}
                className={cx(`${active === item.id_img ? "active" : ""}`)}
                onClick={() => handleChangeColor(item, item.id_img)}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductSelling;
