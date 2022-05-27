import React from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "../src/containers/menu";
import Faqs from "../src/containers/faqs";
import Login from "../src/containers/login";
import Signup from "./containers/signup";
import Landing from "./containers";
import { UserPop } from "./containers/user";

const MainApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/user" element={<UserPop />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainApp;
