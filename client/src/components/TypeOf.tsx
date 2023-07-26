import { Grid } from ".";
import { typeOf } from "../Mock";
import classNames from "classnames/bind";
import styles from "../sass/modules/Typeof.module.scss";
const TypeOf = () => {
  const cx = classNames.bind(styles);
  return (
    <div className="elementor-container">
      <div className="item-list">
        <Grid col={6} mdCol={3} smCol={1} gap={0}>
          {typeOf.map((item) => (
            <div className={cx("item")} key={item.id}>
              <div className={cx("item-icon")}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={cx("item-context")}>
                <h4 className={cx("item-context__title")}>
                  <span>{item.title}</span>
                </h4>
                <p className={cx("item-context__desc")}>{item.desc}</p>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default TypeOf;
