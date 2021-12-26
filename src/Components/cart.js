import React, { useState } from "react";
import Button1, { Button2 } from "./button";
import Modal from "./modal";

const Cart = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModalHandler = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Modal
        title={"My Items"}
        description={"Please set the preference of the items your picked"}
        open={modalOpen}
        closeModal={closeModalHandler}
      >
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
      </Modal>
    </div>
  );
};
export default Cart;
