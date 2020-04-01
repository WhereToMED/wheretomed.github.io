import React, { useState } from "react";

import logo from "../../images/logob.png";
import menuIcon from "../../images/open-menu.svg";
import "./style.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  //const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="header">
        {/* <div role="button" className="menuButton" onClick={() => toggleMenu()}>
          <img src={menuIcon} />
          <div
            className={showMenu ? "menuList" : "hiddenMenuList"}
            id="myLinks"
          >
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div> */}
        <a href="https://wheretomed.com/#Home" className="back">
          <p>{" Home"}</p>
        </a>
        <img className="w2mlogo" src={logo} alt="where to med logo" />

        <a href="https://wheretomed.com/#Home" className="signup">
          <p>Sign up</p>
        </a>
      </div>
    </>
  );
};

export default Header;
