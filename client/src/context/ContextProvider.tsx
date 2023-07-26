import * as React from "react";
const defaultType = {
  currentColor: "#FF7506",
  activeLink: "activeLink",
  normalLink: "normalLink",
  borderSticky: "1px solid #fff",
};
type propsContext = {
  children: React.ReactNode;
};
export const DefaultContext = React.createContext(defaultType);
const ContextProvider = ({ children }: propsContext) => {
  return (
    <DefaultContext.Provider value={defaultType}>
      {children}
    </DefaultContext.Provider>
  );
};
export default ContextProvider;
