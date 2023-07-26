import { useState } from "react";
import { FormReview, Rating } from "../..";
import classNames from "classnames/bind";
import { ProductProps } from "../../../typeProps";
import style from "./Reviews.module.scss";
type ReviewProp = {
  product: ProductProps;
};
const Reviews = ({ product }: ReviewProp) => {
  const cx = classNames.bind(style);
  const [countReview, setCountReview] = useState<number>(0);
  return (
    <div>
      <div className={cx("mb-14")}>
        <h3 className={cx("text-3xl", "font-normal", "tracking-wide")}>
          Reviews
        </h3>
        {countReview == 0 ? (
          <span>There are no reviews yet.</span>
        ) : (
          <span>{countReview}</span>
        )}
      </div>
      <div>
        <h3
          className={cx("mb-3", "text-3xl", "font-normal", "tracking-wide")}
        >{`Be the first to review  “${product.name}”`}</h3>
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
        <div>Your Rating *</div>
        <Rating />
        <FormReview />
      </div>
    </div>
  );
};

export default Reviews;
