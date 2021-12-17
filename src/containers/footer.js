import React from "react";
import "../sass/pages/_footer.scss";
import { FaGithub, FaInstagram, FaMedium, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container flex flex-col justify-center items-center">
      <div className="footer-items text-xl gap-x-2 text-white">
        <FaGithub />
        <FaTwitter/>
        <FaInstagram/>
        <FaMedium/>
      </div>
      <span className='text-sm font-medium pt-2'>copyrights ASAP_A1 2021</span>
    </div>
  );
};

export default Footer;
