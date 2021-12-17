import React from "react";
import Button1, { Button2 } from "../Components/button";
import "../sass/pages/navBar.scss";
import { FaAngrycreative, FaCartArrowDown } from "react-icons/fa";

export const Navigator = () => {


  return (
    <>
      <div className="nav-body">
        <div className="nav-container flex ">
          <FaAngrycreative className="text-6xl text-white" />
          <div>
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
          <div className="flex">
            <Button1>
              <a href="/login">sign in ...</a>
            </Button1>

            <Button2>
              <a href="/signup">sign up...</a>
            </Button2>
          </div>
        </div>
      </div>
    </>
  );
};
