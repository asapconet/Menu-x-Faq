import React from "react";
import "../sass/components/_button.scss";

const Button1 = ({ children, type, onClick, className }) => {
  return (
    <button type={type} className={"primary-btn" + className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button1;

export const Button2 = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type}
      className={`secondary-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
