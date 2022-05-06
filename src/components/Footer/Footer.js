import React from "react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <Link to="#">
          <FaTwitter />
        </Link> 
        <Link to="#">
          <FaFacebook />
        </Link> 
        <Link to="#">
          <FaLinkedin />
        </Link> 
        <Link to="#">
          <FaInstagram />
        </Link> 
        <Link to="#">
          <FaTwitter />
        </Link> 
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
