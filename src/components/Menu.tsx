import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu({ content }: string) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div className={navbar ? "navbar-active" : "navbar"}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/services">
          Services
        </Link>
      </div>

      <div className="content">
        <b>{content}</b>
      </div>
    </>
  );
}
export default Menu;
