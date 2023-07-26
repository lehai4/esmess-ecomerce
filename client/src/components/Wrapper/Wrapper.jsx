import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);
const Wrapper = ({ children, title }) => {
  return (
    <div className={cx("wrapper", `${title ? title : "None"}-esmee-wrapper`)}>
      {children}
    </div>
  );
};

export default Wrapper;
