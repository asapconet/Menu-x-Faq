import React from "react";
import Button1, { Button2 } from "../Components/button";
import "../sass/pages/navBar.scss";
import { FaAngrycreative, FaCartArrowDown } from "react-icons/fa";
import Logo from '../images/Logo.png'

export const Navigator = () => {
  return (
    <>
      <div className="nav-body">
        <div className="nav-container flex ">
          <img src={Logo} alt="logo" className="logo-lg hidden"/>
          <FaAngrycreative className="logo-lg text-6xl text-white" />
          <div className="options-lg">
            <ul>
              <ul>
                <li className="hover:bg-white rounded-t-lg">
                  {" "}
                  Categories
                  <li className="bg-white px-2 py-2 hidden rounded shadow-lg flex flex-col gap-y-2">
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Desert</li>
                  </li>
                </li>
              </ul>
              <ul>
                <li>FAQs</li>
              </ul>
              <ul>
                <li>
                  <FaCartArrowDown className="text-2xl" />
                </li>
              </ul>
            </ul>
          </div>
          <div className=" buttons-lg flex">
            <Button1>
              <a href="/login">sign in ...</a>
            </Button1>

            <Button2>
              <a href="/signup">sign up...</a>
            </Button2>
          </div>
        </div>
        <div className="nav-sm nav-lg">
          <FaAngrycreative className="text-6xl text-white" />
        </div>
      </div>
    </>
  );
};
