import classNames from "classnames/bind";
import { Link, useLocation, useParams } from "react-router-dom";
import { Section, Wrapper } from "..";
import { declarePath } from "../../utils/formatPath";
import styles from "./Navigate.module.scss";
const Navigate = ({ ...rest }) => {
  const cx = classNames.bind(styles);
  const { pathname } = useLocation();
  const { slug } = useParams();
  return (
    <Section title="navigate">
      <Wrapper title="Refer">
        <div className={cx("navigate")}>
          <div></div>
          <div className={cx("navigate-right")}>
            <span
              className={cx("text-xl", "tracking-normal", "default-navigate")}
            >
              <Link to="/">Home</Link>
            </span>
            {slug && rest.category !== undefined ? (
              <>
                <div className={cx("straight-line")}></div>
                <Link to={`/product-category/${rest?.category}`}>
                  {declarePath(rest?.category)}
                </Link>
                <div className={cx("straight-line")}></div>
                {declarePath(slug)}
              </>
            ) : slug && rest.category === undefined ? (
              <>
                <div className={cx("straight-line")}></div>
                {declarePath(slug)}
              </>
            ) : (
              <>
                <div className={cx("straight-line")}></div>
                <div>{declarePath(pathname.substring(1))}</div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Navigate;
