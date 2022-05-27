import React from "react";
import User from "../Components/user-modal";
import Deepee from "../images/mypeg.jpg";

export function UserPop() {
  const [showModal, setShowModal] = React.useState(true);

  const handleModal = () => {
    setShowModal(false);
    window.location.href = "/menu";
  };
  return (
    <>
      <User
        title={<img src={Deepee} alt="" className="w-52 rounded-2xl" />}
        description="Alexander Volcano"
        open={showModal}
        closeModal={handleModal}
      >
        <div> the body is yet to shoe like it shou</div>
      </User>
    </>
  );
}
