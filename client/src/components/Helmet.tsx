import React, { useEffect } from "react";
import PropTypes from "prop-types";

type HelMetProps = {
  title: string;
  children: React.ReactNode;
};

const Helmet = (props: HelMetProps): JSX.Element => {
  document.title = "ESMÉE- " + props.title;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
