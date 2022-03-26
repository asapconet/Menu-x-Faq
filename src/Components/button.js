import React from "react";
import "../sass/components/_button.scss";

const Button1 = ({ children, onClick, className }) => {
  return (
    <button className={"primary-btn" + className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button1;

export const Button2 = ({ children, onClick, className }) => {
  return (
    <button className={`secondary-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
