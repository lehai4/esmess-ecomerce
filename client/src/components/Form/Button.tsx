import React from "react";
type ButtonProps = {
  text: string;
  icon: string;
  style: React.CSSProperties;
  handleClick: () => void;
};
const Button = ({ text, style, icon, handleClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      style={style}
      onClick={handleClick}
      className={`flex flex-col items-center justify-center hover:drop-shadow-xl `}
    >
      {icon !== "" && <img className="md:mb-1" src={icon} alt="" />}
      {text}
    </button>
  );
};

export default Button;
