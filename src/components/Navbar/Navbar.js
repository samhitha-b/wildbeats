import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const handelClick = () => {
    setIsopen(!isOpen);
  };
  // document.addEventListener("scroll", () => {
  //   var solidNav = document.querySelector(".nav");
  //   var colorLinks = document.querySelectorAll(".link-list");

  //   if (window.pageYOffset > 1 && window.pageYOffset <= 220) {
  //     solidNav.classList.add("translate");
  //   } else if (window.pageYOffset > 220) {
  //     solidNav.classList.add("solid-nav");
  //     solidNav.classList.remove("translate");
  //   } else {
  //     solidNav.classList.remove("solid-nav");
  //     solidNav.classList.remove("translate");
  //   }
  //   // console.log(solidNav);
  // });
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
            <a className="link-list" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="link-list" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a className="link-list" href="#">
              Art
            </a>
          </li>
          <li>
            <a className="link-list" href="#">
              Music
            </a>
          </li>
          <li>
            <a className="link-list" href="#">
              Drama
            </a>
          </li>
          <li className="link-list">
            <a className="link-list" href="#">
              Dance
            </a>
          </li>
          <li>
            <a className="link-list" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
