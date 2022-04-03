import React from "react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
      <div className="footer-text">
        <p>Made with</p>&nbsp;
        <p>
          <FaHeart />
        </p>
        &nbsp;<p> by BetaLabs</p>
      </div>
    </div>
  );
};
export default Footer;
