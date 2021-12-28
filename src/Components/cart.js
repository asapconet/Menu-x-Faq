import React from "react";
import Button1, { Button2 } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../Context/home-slice";

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
        {cartItems.map((items) => {
          // const { id, name, price, image, totalQuantity, totalPrice } = items;
          return (
            <div key={items.id} className="text-sm p-9">
              <div>
                <div className="flex justify-between">
                  <span>
                    <img src={items.image} alt={items.name} className="w-12" />
                    {items.name}
                  </span>
                  <span className="font-bold">
                    ${items.totalPrice}
                    <i className="font-medium">(${items.price}per item)</i>
                  </span>
                </div>
                <div className="flex justify-between mt-9">
                  <span>{"x" + items.totalQuantity}</span>
                  <span className="flex gap-x-5">
                    <Button1>-</Button1>
                    <Button2>+</Button2>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
