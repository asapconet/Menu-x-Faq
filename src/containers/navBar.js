import React from "react";
import Button1 from "../Components/button";
import "../sass/pages/navBar.scss";

export const Navigator = () => {
  return (
    <div className="nav-body">
      <div className='nav-container'>
        <img src="" alt="main-log" />
        <div>
          <ul>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
        </div>
        <div>
          <Button1>sign in ...</Button1>
          <Button1>sign up...</Button1>
        </div>
      </div>
    </div>
  );
};
