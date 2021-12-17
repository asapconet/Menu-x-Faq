import React, { useState } from "react";
import Input from "../Components/input";
import Modal from "../Components/modal";
import { Button2 } from "../Components/button";
import { FaAngleDoubleRight, FaUserTie } from "react-icons/fa";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleSubmit = () => {
    return null;
  };

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
        <form onSubmit={handleSubmit}>
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
          <div className="flex justify-center text-center my-6">
            <Button2>
              Login <FaAngleDoubleRight />
            </Button2>
          </div>
          <div className="flex justify-between">
            <span>
              <a href="a.com">forgot password?</a>
            </span>
            <span>
              <a href="/signup">new here? signup</a>
            </span>
          </div>
        </form>
      </Modal>{" "}
    </>
  );
};

export default Login;
