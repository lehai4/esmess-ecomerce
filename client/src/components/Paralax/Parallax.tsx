import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Parallax.module.scss";
import { Grid } from "..";
import { parallax } from "../../Mock";

const Parallax = () => {
  const cx = classNames.bind(styles);
  const [id, setID] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);
  function logit() {
    setScrollY(window.pageYOffset);
  }
  const handleShow = (i: number, e: any) => {
    setID(i);
    setToggleIcon(!toggleIcon);
  };
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div className={cx("parallax")}>
      <div className={cx("parallax-row-holder")}>
        <div className={cx("parallax-img-holder")} style={{ opacity: 1 }}>
          <div
            className={cx("parallax-img-wrapper")}
            style={{ transform: `translate3d(0px, ${scrollY / 50}%, 0px)` }}
          >
            <img
              className={cx("parallax-img")}
              src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/09/main-parallax-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="elementor-container">
        <div className={cx("parallax-content")}>
          <Grid col={2} mdCol={1} smCol={1} gap={0}>
            {/* LEFT */}
            <div className={cx("parallax-content_left")}>
              <div className={cx("parallax-content-info")}>
                <h6 className={cx("parallax-content-info_subtitle")}>
                  ask us anything
                </h6>
                <h2 className={cx("parallax-content-info_title")}>
                  For more info
                </h2>
                <p className={cx("parallax-content-info_text")}>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat.
                </p>
              </div>
              <div className={cx("parallax-content-more")}>
                <Link to="/shop-right-sidebar">View More</Link>
              </div>
            </div>
            {/* RIGHT */}
            <div className={cx("parallax-content_right")}>
              {parallax.map((item, i) => (
                <Fragment key={i}>
                  <h4 onClick={(e) => handleShow(i, e)}>
                    <span className={cx("parallax-content_right-title")}>
                      {item.title}
                    </span>
                    <span className={cx("parallax-content_right-icon")}>
                      <span className={cx("parallax-icon")}>
                        {item.id === id ? "-" : "+"}
                      </span>
                    </span>
                  </h4>
                  <div
                    className={cx("parallax-content-feedback")}
                    style={
                      id === i ? { display: "block" } : { display: "none" }
                    }
                  >
                    {item.content}
                  </div>
                </Fragment>
              ))}
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
