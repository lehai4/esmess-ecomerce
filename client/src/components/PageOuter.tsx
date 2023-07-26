import classNames from "classnames/bind";
import styles from "../sass/modules/PageOuter.module.scss";
type PageOuterProps = {
  children: React.ReactNode;
};
const PageOuter = ({ children }: PageOuterProps) => {
  const cx = classNames.bind(styles);
  return (
    <div id={cx("page-outer")}>
      <div id={cx("page-inner")}>
        <main id={cx("page-content")}>{children}</main>
      </div>
    </div>
  );
};

export default PageOuter;
