import { Grid } from ".";
import classNames from "classnames/bind";
import styles from "../sass/modules/LoveShopping.module.scss";
import { Link } from "react-router-dom";
const LoveShopping = () => {
  const cx = classNames.bind(styles);
  return (
    <div className="elementor-widget-container">
      <div className="elementor-container">
        <Grid col={2} mdCol={1} smCol={1} gap={0}>
          <div className={cx("item")}>
            <h6 className={cx("item-subtitle")}>LOVE SHOPING</h6>
            <h2 className={cx("item-title")}>For shopaholics</h2>
          </div>
          <div className={cx("item")}>
            <div className={cx("item-more")}>
              <span>
                <Link to={`/left-sidebar/`}>READ MORE</Link>
              </span>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default LoveShopping;
