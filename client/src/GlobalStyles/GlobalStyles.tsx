import React from "react";
import "./GlobalStyle.scss";

type GlobalStyle = {
  children: React.ReactNode;
};
const GlobalStyles = ({ children }: GlobalStyle) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default GlobalStyles;
