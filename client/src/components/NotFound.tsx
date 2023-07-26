import React from "react";
import classNames from "classnames/bind";
import styles from "../sass/modules/NotFound.module.scss";
const NotFound = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("not__found")}>
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
    </div>
  );
};

export default NotFound;
