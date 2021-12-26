import React, { useState } from "react";
import Button1, { Button2 } from "./button";
import Modal from "./modal";

const Cart = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const closeModalHandler = () => {
  //   setModalOpen(false);
  // };
  return (
    <div>
      <div className="block m-auto h-lgx2 w-full max-w-md p-6 my-8 rounded shadow-2xl overflow-hidden text-left transition-all transform bg-white">
        <div
          as="h3"
          className="text-3xl font-bold leading-6 capitalize mb-5 text-gray-700 flex justify-between"
          >
          <span>THE SELECTED ITEMS</span>
        </div>
        <div className="mt-2">
          <p className="text-base mb-5 text-md font-medium text-gray-600">
            {"description"}
          </p>
        </div>
        <div className="text-sm">
          
          <div>
            <div className="flex justify-between">
              <span>
                <img src="" alt="the product-shot" />
                the product name
              </span>
              <span className="font-bold">
                ${"10.00"} <i className="font-medium">($5.00per item)</i>
              </span>
            </div>
            <div className="flex justify-between mt-9">
              <span>{"x4"}</span>
              <span className="flex gap-x-5">
                <Button1>-</Button1>
                <Button2>+</Button2>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* </Modal> */}
    </div>
  );
};
export default Cart;
