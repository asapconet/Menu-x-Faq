import React from "react";
import "../sass/pages/navBar.scss";
// import Logo from "../images/Logo.png";
import Button1, { Button2 } from "../Components/button";
import { CgMenuLeft } from "react-icons/cg";
import { FaAngrycreative, FaCartArrowDown } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../Context/home-slice";

export const Navigator = () => {
  const dispatch = useDispatch();

  const updateQuantityHandler = useSelector(
    (state) => state.cart.totalQuantity
  );

  const toggleCartHandler = () => {
    dispatch(HomeActions.toggle());
  };

  return (
    <>
      <div className="nav-body border-b border-gray-600">
        <div className="nav-container flex ">
          <div className="logo-sm mt-4 text-3xl font-bold ">
            <CgMenuLeft />
          </div>
          {/* <img src={Logo} alt="logo" className="logo-lg hidden" /> */}
          <FaAngrycreative className="logo-lg text-6xl text-white" />
          <div className="options-lg">
            <ul>
              <ul>
                <li className="hover:bg-gray-600 ">
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
                  <button className="flex" onClick={toggleCartHandler}>
                    <FaCartArrowDown className="text-2xl" />
                    <span className=" text-white">{updateQuantityHandler}</span>
                  </button>
                </li>
              </ul>
            </ul>
          </div>
          <div className=" buttons-lg flex">
            <Button2 className="text-black px-4">
              <a href="/">sign out...</a>
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
