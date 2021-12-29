import React from "react";
import Button1, { Button2 } from "./button";
import { useDispatch } from "react-redux";
import { CartActions } from "../Context/cart-slice";

export const CartItems = (props) => {

  const dispatch = useDispatch();

  const { id, title, quantity, totalPrice, totalQuantity, price, image, total } =
    props;

  const addItem = () => {
    dispatch(
      CartActions.addItemToCart({
        id,
        title,
        quantity,
        image,
        price,
        total,
      })
    );
  };

  const removeItem = () => {
    dispatch(CartActions.removeItemFromCart(id));
  };

  return (
    <div>
      <div key={id} className="text-sm p-9">
        <div>
          <div className="flex justify-between">
            <span>
              <img src={image} alt={title} className="w-12" />
              {title}
            </span>
            <span className="font-bold">
              ${totalPrice}
              <i className="font-medium">(${price}per item)</i>
            </span>
          </div>
          <div className="flex justify-between mt-9">
            <span>{"x" + totalQuantity}</span>
            <span className="flex gap-x-5">
              <Button1 onClick={removeItem}>-</Button1>
              <Button2 onClick={addItem}>+</Button2>
            </span>
          </div>
        </div>
      </div>
      {/* {cartItems.map((items) => {
        const { id, name, price, image, totalQuantity, totalPrice } = items;
        return (
        );
      })} */}
    </div>
  );
};
