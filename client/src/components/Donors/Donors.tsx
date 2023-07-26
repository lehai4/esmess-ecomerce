import { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "./Donors.module.scss";
import { Grid } from "../";
import { donors } from "../../Mock";
import { Link } from "react-router-dom";
const Donors = () => {
  const cx = classNames.bind(styles);
  return (
    <Fragment>
      <div className="elementor-widget-container">
        <div className="list-item">
          <Grid col={6} mdCol={3} smCol={1} gap={0}>
            {donors.map((donor) => (
              <div className={cx("item")} key={donor.id}>
                <Link to="/#" target="_blank">
                  <img src={donor.img} alt="" />
                </Link>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default Donors;
