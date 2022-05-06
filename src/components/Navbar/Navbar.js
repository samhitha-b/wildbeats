import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const handelClick = () => {
    setIsopen(!isOpen);
  };
  document.addEventListener("scroll", () => {
    var solidNav = document.querySelector(".nav");

    if (window.pageYOffset > 150) {
      solidNav.classList.add("nav-curve");
    } else {
      solidNav.classList.remove("nav-curve");
    }
  });
  return (
    <nav className="nav">
      <div className="toggle-container">
        <button className="toggle-nav" onClick={handelClick}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={isOpen ? "links show" : "links"}>
        <ul>
          <li>
            <Link className="link-list" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-list" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="link-list" to="/art">
              Art
            </Link>
          </li>
          <li>
            <Link className="link-list" to="/music">
              Music
            </Link>
          </li>
          <li>
            <Link className="link-list" to="/drama">
              Drama
            </Link>
          </li>
          <li className="link-list">
            <Link className="link-list" to="/dance">
              Dance
            </Link>
          </li>
          <li>
            <Link className="link-list" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
