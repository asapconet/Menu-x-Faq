import React from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigator } from "./containers/navBar";
import { Menu } from "../src/containers/menu";
import Login from "../src/containers/login";
import Signup from "./containers/signup";
// import Footer from "./containers/footer";
import Landing from "./containers";

const MainApp = () => {
  return (
    <>
      {/* <Navigator />
      <div className='app-body'>
          <Landing/>
        </div>
        <Footer/> */}
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
