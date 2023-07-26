import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Grid } from "..";
import { fashion } from "../../Mock";
import styles from "./Fashion.module.scss";
const Fashion = () => {
  const cx = classNames.bind(styles);
  return (
    <div className="elementor-widget-container">
      <div className={cx("list-item")}>
        <Grid col={3} mdCol={2} smCol={1} gap={0}>
          {fashion.map((item) => (
            <div className={cx("item")} key={item.id}>
              <div className="item-inner">
                <Link to={`/product-category/${item.name.toLowerCase()}`}>
                  <div className={cx("category-image")}>
                    <img src={item.img} alt={`${item.name}`} />
                    <div className={cx("category-image-inner")}>
                      <h2 className={cx("category-image-inner__title")}>
                        <Link
                          to={`/product-category/${item.name.toLowerCase()}`}
                        >
                          {item.name}
                        </Link>
                      </h2>
                      <h5 className={cx("category-image-inner__desc")}>
                        {item.desc}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Fashion;
