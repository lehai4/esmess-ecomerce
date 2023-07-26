import classNames from "classnames/bind";
import styles from "./Section.module.scss";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ children, title }: SectionProps) => {
  const cx = classNames.bind(styles);
  return (
    <section
      className={cx(
        "elementor-section",
        `${title ? `elementor-element-${title}` : ""}`
      )}
    >
      {children}
    </section>
  );
};

export default Section;
