import React from "react";
import Button1, { Button2 } from "../Components/button";
import menu from "../data/api";
import "../sass/pages/navBar.scss";

export const Navigator = ({data}) => {
  return (
    <div className="nav-body">
      <div className='nav-container'>
        <img src="" alt="main-log" />
        <div>
          <ul>
            <li>Categories
              {/* {menu.map((e, index) => {
                return (
                  <ul key={index}>
                      <li>{e.category}</li>
                  </ul>
                )
              })} */}
            </li>
            <li>123</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <Button1>sign in ...</Button1>
          <Button2 >sign up...</Button2>
        </div>
      </div>
    </div>
  );
};
