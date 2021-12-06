import React, { useEffect, useState } from "react";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img className="nav__logo" src="netflix-logo.png" alt="netflix-logo" />

        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"
          alt="netflix-avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
