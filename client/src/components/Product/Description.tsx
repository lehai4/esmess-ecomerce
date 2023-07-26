import { FunctionComponent } from "react";
import classNames from "classnames/bind";
import style from "./ProductAdditional/ProductAdditional.module.scss";
export interface IProps {}
const Description: FunctionComponent<IProps> = () => {
  const cx = classNames.bind(style);

  return (
    <div className={cx("text-center")}>
      <span className={cx("text-lg", "tracking-wider")}>
        Donec quis enim vel urna tristique pulvinar. Curabitur a facilisis est.
        Sed mollis odio in felis tristique luctus. Nam magna mi, consectetur vel
        lorem non, porttitor hendrerit nunc. Aliquam erat volutpat. Cras varius
        elit vitae pulvinar euismod. Phasellus sagittis urna sed elit ultrices
        tempus. Ut ac tellus ac mi condimentum pretium. Nam vestibulum hendrerit
        lorem nec tincidunt. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Suspendisse erat mi, faucibus
        at congue nec, scelerisque id nibh. Aenean dolor odio, vestibulum in
        accumsan dignissim, interdum vel turpis. Etiam in lorem quis ipsum.
      </span>
    </div>
  );
};
export default Description;
