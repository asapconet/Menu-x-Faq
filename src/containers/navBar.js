import React from "react";
import Button1, { Button2 } from "../Components/button";
// import menu from "../data/api";
import "../sass/pages/navBar.scss";
import { FaAngrycreative } from "react-icons/fa";


export const Navigator = ({ data, setModalOpen }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    return console.log("yes i heard the press");
  };

  return (
    <>
      <div className="nav-body">
        <div className="nav-container">
          <FaAngrycreative className="text-6xl text-white" />
          <div>
            <ul>
              <li>
                Categories
                {/* {menu.map((e, index) => {
                return (
                  <ul key={index}>
                      <li>{e.category}</li>
                  </ul>
                )
              })} */}
              </li>
              <li>cart</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <Button1 onClick={handleSubmit}>sign in ...</Button1>
            <Button2>sign up...</Button2>
          </div>
        </div>
      </div>
    </>
  );
};
