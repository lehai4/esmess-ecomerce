import { Button, MultipleRange } from "../..";

import classNames from "classnames/bind";
import style from "./Category.module.scss";
import { useRef, useState } from "react";
import { categorySliceProps } from "../../../typeProps";
import { Link } from "react-router-dom";
type CategoryProps = {
  category: categorySliceProps[];
  min: number;
  max: any;
  step: number;
  handleSort: (minVal: number, maxVal: number) => void;
};

const Category = ({ category, min, max, step, handleSort }: CategoryProps) => {
  const cx = classNames.bind(style);
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  return (
    <div className={cx("ml-2")}>
      <div className={cx("mb-4")}>
        <span className={cx("text-2xl", "mb-4", "tracking-wide")}>
          Filter by price
        </span>
        <div className={cx("mt-4")}>
          <MultipleRange
            min={min}
            max={max}
            step={step}
            minVal={minVal}
            maxVal={maxVal}
            minValRef={minValRef}
            maxValRef={maxValRef}
            setMinVal={setMinVal}
            setMaxVal={setMaxVal}
          />
        </div>
        <div className={cx("mt-24")}>
          <Button
            text="Filter"
            style={{
              padding: "15px 30px",
              color: "white",
              backgroundColor: "#111",
              border: "1px solid #111",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.35em",
            }}
            icon=""
            handleClick={() => handleSort(minVal, maxVal)}
          />
        </div>
      </div>
      {category.length > 1 && (
        <div className={cx("my-10")}>
          <div className={cx("text-2xl", "tracking-wide", "mb-7")}>
            Product categories
          </div>
          <div className={cx("flex", "flex-col", "gap-y-5")}>
            {category.map((item, i) => (
              <Link
                key={i}
                className={cx(
                  "uppercase",
                  "text-base",
                  "tracking-widest",
                  "hover:opacity-90",
                  "cursor-pointer"
                )}
                to={`/product-category/${item.category.toLowerCase()}`}
              >
                {item.category}&nbsp;{`(${item.count})`}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
