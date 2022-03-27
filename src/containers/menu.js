import React from "react";
import { useSelector } from "react-redux";
import Modal from "../Components/modal";
import { Card } from "../Components/card";
import "../sass/components/card.scss";
import Cart from "../Components/cart";
import {Navigator} from './navBar'
import Footer from './footer'

export const Menu = () => {
  const showCart = useSelector((state) => state.home.isCartVisible);

  return (
    <>
      <Navigator/>
    <div className="app-body">
      <Modal />
      {showCart && <Cart />}
      <Card />
    </div>
    <Footer/>
    </>
  );
};
