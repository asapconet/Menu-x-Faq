import React from "react";
import '../sass/components/_button.scss'

const Button1 = ({ children, onclick, }) => {
  return (
    <button
    
     className='primary-btn' onclick={onclick}>
      {children}
    </button>
  );
};

export default Button1;
