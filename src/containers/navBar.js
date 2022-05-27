import React from "react";
import "../sass/pages/navBar.scss";
import { Link } from "react-router-dom";
import { Button2 } from "../Components/button";
import { CgMenuLeft } from "react-icons/cg";
import { FaAngrycreative, FaCartArrowDown } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../services/home-slice";
// import Faqs from "./faqs";

export const Navigator = () => {
  // const [showFaq, setShowFaq] = React.useState(false);
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
          <Link to={"/menu"}>
            <FaAngrycreative className="logo-lg text-6xl text-white" />
          </Link>
          <div className="options-lg">
            <ul>
              {/* <ul>
                <li class="dropdown dropdown-6">
                  Categories
                  <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6 pt-3 rounded shadow-lg flex flex-col gap-y-1">
                    <li className="dropdown_item-1">Breakfast</li>
                    <li className="dropdown_item-2">Lunch</li>
                    <li className="dropdown_item-3">Dinner</li>
                    <li className="dropdown_item-4">Desert</li>
                    <li className="dropdown_item-5">Appetizer</li>
                  </ul>
                </li>
              </ul> */}
              <ul>
                <li>
                  <Link to={"/faqs"}>FAQs</Link>
                </li>
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
