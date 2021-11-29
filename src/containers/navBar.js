import React, { useState } from "react";
import Button1, { Button2 } from "../Components/button";
// import menu from "../data/api";
import Input from "../Components/input";
import Modal from "../Components/modal";
import "../sass/pages/navBar.scss";
import { FaAngrycreative, FaCartArrowDown, FaUserTie} from "react-icons/fa";


export const Navigator = () => {
  const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
      return setModalOpen(false);
    };



  return (
    <>
      <Modal
        title={<FaUserTie />}
        description="Ensure you enter correct credentials"
        open={modalOpen}
        closeModal={handleModal}
      >
        <form>
          <label>
            Username or Email
            <Input
              id="name"
              type="text"
              placeholder="@jonson or a@icloud.com"
            />
          </label>
          <label>
            Password
            <Input id="psw" type="password" placeholder="jwe@123\/" />
          </label>
          <div className='text-center my-6'>
            <Button2>Login >>></Button2>
          </div>
          <div className='flex justify-between'>
            <span><a href='a.com'>forgot password?</a></span>
            <span><a href='a.com'>new here? signup</a></span>
          </div>
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
            <Button2 onClick='./login'>sign up...</Button2>
          </div>
        </div>
      </div>
    </>
  );
};
