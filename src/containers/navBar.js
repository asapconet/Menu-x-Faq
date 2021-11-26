import React, { useState } from "react";
import Button1, { Button2 } from "../Components/button";
// import menu from "../data/api";
import Input from "../Components/input";
import Modal from "../Components/modal";
import "../sass/pages/navBar.scss";
import { FaAngrycreative, FaCartArrowDown } from "react-icons/fa";


export const Navigator = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    return setModalOpen(false);
  };
  return (
    <>
      <Modal
        title="something"
        description="this is it"
        open={modalOpen}
        closeModal={handleModal}
      >
        <form>
          <label>
            name
            {/* <Input type="text" /> */}
          </label>
        </form>
      </Modal>
      <div className="nav-body">
        <div className="nav-container">
          <FaAngrycreative className="text-6xl text-white" />
          <div>
            <ul>
              <li>
                Categories
                {/* {menu.map((e, index) => {
                return (
                  <ul key={index}>
                      <li>{e.category}</li>
                  </ul>
                )
              })} */}
              </li>
              <li>FAQs</li>
              <li>
                <FaCartArrowDown className="text-2xl" />
              </li>
            </ul>
          </div>
          <div>
            <Button1 onClick={() => setModalOpen(true)}>sign in ...</Button1>
            <Button2>sign up...</Button2>
          </div>
        </div>
      </div>
    </>
  );
};
