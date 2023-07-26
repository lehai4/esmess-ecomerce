import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "..";
import { footer } from "../../Mock";
import { Link } from "react-router-dom";
const Footer = () => {
  const cx = classNames.bind(styles);
  return (
    <footer id={cx("footer")} className={cx("page-footer")}>
      <div id={cx("page-footer-top")}>
        <div className="elementor-container">
          <div id={cx("page-footer-top-inner")}>
            <Grid col={4} mdCol={2} smCol={1} gap={0}>
              <div className={cx("item")}>
                <h2>Esmée</h2>
                <p>
                  Esmée, a fashion theme especially desined for online clothing
                  & acessoriy stores.
                </p>
                <span>0376782528</span>
              </div>
              {footer.map((item) => (
                <div className={cx("item")} key={item.id}>
                  <h4 className={cx("item__title")}>{item.title}</h4>
                  <div className={cx("item-menu-footer")}>
                    <ul>
                      {item?.contents?.map((menu) => (
                        <li key={menu.idc}>
                          <Link to={`/${menu.path}/`}>{menu.content}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className={cx("item")}>
                <h4 className={cx("item__title")}>Contact us</h4>
                <p>For any additional questions feel free to contact us here</p>
                <form method="post" action="" className={cx("item-form")}>
                  <div className={cx("form")}>
                    <input placeholder="Your e-mail" className={cx("input")} />
                    <Link to="/#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={cx("icon")}
                      />
                    </Link>
                  </div>
                </form>
              </div>
            </Grid>
          </div>
        </div>
      </div>
      <div id={cx("page-footer-bottom")}>
        <div className="elementor-container">
          <div className={cx("page-footer-bottom-inner")}>
            <p>©2023 LeChiHai, All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
