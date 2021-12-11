import React, { useState } from "react";
import Input from "../Components/input";
import Modal from "../Components/modal";
import { Button2 } from "../Components/button";
import { FaUserTie } from "react-icons/fa";
 const Login = () => {
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
          <div className="text-center my-6">
            <Button2>Login >>></Button2>
          </div>
          <div className="flex justify-between">
            <span>
              <a href="a.com">forgot password?</a>
            </span>
            <span>
              <a href="a.com">new here? signup</a>
            </span>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Login