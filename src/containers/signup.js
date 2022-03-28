import React, { useState } from "react";
import Input from "../Components/input";
import Modal from "../Components/modal";
import { Button2 } from "../Components/button";
import {
  FaAngleDoubleRight,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleSubmit = () => {
    return null;
  };

  const handleModal = () => {
    setModalOpen(false);
    window.location.href = "/";
  };
  return (
    <div>
      <Modal
        title={<FaUserTie />}
        description="Ensure you enter correct credentials"
        open={modalOpen}
        closeModal={handleModal}
      >
        <form onSubmit={handleSubmit} className="font-bold">
          <label>
            Full Name
            <Input id="name" type="text" placeholder="Asap Conet" />
          </label>
          <label>
            Email
            <Input id="email" type="email" placeholder="asap@icloud.com" />
          </label>
          <label>
            Password
            <Input id="psw" type="password" placeholder="jwe@123\/" />
          </label>
          <div className="flex justify-center text-center my-6">
            <Link to="/menu">
              <Button2 type="submit" className='px-3'>
                Signup <FaAngleDoubleRight />
              </Button2>
            </Link>
          </div>
          <div className="flex justify-between">
            <span className="flex gap-x-2">
              <FaGoogle />
              <FaInstagram />
              <FaGithub />
            </span>
            <span className="font-medium">
              <a href="/login">have an account? login</a>
            </span>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Signup;
