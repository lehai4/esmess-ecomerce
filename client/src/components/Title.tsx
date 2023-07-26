import classNames from "classnames/bind";
import { Wrapper } from ".";
import styles from "../sass/modules/Title.module.scss";

type SubTitleProps = {
  subtitle: string;
  title: string;
  desc: string | undefined;
};
const SubTitle = (props: SubTitleProps) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("elementor-container")}>
      <Wrapper title="Title">
        <div className={cx("elementor-widget-wrap")}>
          <h6 className={cx("subtitle")}>{props.subtitle}</h6>
          <h1 className={cx("title", "text-5xl")}>{props.title}</h1>
          {props.desc !== "" && <p className={cx("desc")}>{props.desc}</p>}
          <p className={cx("m-text")}></p>
        </div>
      </Wrapper>
    </div>
  );
};

export default SubTitle;
