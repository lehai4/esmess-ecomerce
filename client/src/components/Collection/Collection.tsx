import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid, Wrapper } from "..";
import { Link } from "react-router-dom";
const Collection = () => {
  const cx = classNames.bind(styles);
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="elementor-container">
      <Wrapper title="collection">
        <Grid col={2} mdCol={2} smCol={1} gap={0}>
          <div className={cx("collection-left")}>
            <Link to={`/product-category/style`}>
              <div className={cx("elementor-wiget-populated")}>
                <div data-aos="fade-up">
                  <div className={cx("category-image")}>
                    <img
                      src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/categories-4.jpg"
                      alt=""
                    />
                    <div className={cx("category-image-inner")}>
                      <h1 className={cx("category-image-inner__title")}>
                        <Link to={`/product-category/style/`}>Style</Link>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={cx("collection-right")}>
            <Link to={`/product-category/summer`}>
              <div className={cx("elementor-wiget-populated", "overide")}>
                <div data-aos="fade-up">
                  <div className={cx("category-image")}>
                    <img
                      src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/categories-5.jpg"
                      alt=""
                    />
                    <div className={cx("category-image-inner")}>
                      <h1 className={cx("category-image-inner__title")}>
                        <Link to={`/product-category/summer/`}>Summer</Link>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Grid>
      </Wrapper>
    </div>
  );
};

export default Collection;
