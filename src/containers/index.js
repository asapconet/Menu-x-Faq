import React from "react";
import { Link } from "react-router-dom";
import { Button2 } from "../Components/button";
import "../sass/pages/_home.scss";
import { FaAngleDoubleRight } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="onboarding ">
      <div className="main-contents ">
        <h1>ASAPs. MENU.</h1>
        <h2>Treys of Elegance</h2>
        <Link to="/login">
          <Button2 className=" flex items-center gap-x-2 px-4 text-2xl ">
            Get Started <FaAngleDoubleRight />
          </Button2>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
