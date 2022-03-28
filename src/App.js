import React from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "../src/containers/menu";
import Login from "../src/containers/login";
import Signup from "./containers/signup";
import Landing from "./containers";

const MainApp = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainApp;
