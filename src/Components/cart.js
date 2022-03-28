import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../services/home-slice";
import { CartItems } from "./cart-Items";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(HomeActions.toggle());
  };

  return (
    <div className="flex justify-center fixed inset-0 z-10  backdrop-filter backdrop-blur-sm">
      <div className="block absolute w-full max-w-md p-6 my-8 rounded shadow-2xl text-center bg-white">
        <div
          as="h3"
          className="text-3xl font-bold leading-6 capitalize mb-5 text-gray-700 flex justify-between"
        >
          <span>MY ITEMS</span>
          <span className="text-sm px-5 cursor-pointer" onClick={toggleHandler}>
            x
          </span>
        </div>
        <div className="m-2 border-b">
          <p className="text-base capitalize mb-5 text-md font-medium text-gray-600">
            {"Customize your order"}
          </p>
        </div>
        {cartItems.map((item) => (
          <CartItems
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;
