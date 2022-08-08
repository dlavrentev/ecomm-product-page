import React, { useState } from "react";
import Close from "../../Images/icon-close.svg";
import Burger from "./../../Images/icon-menu.svg";
import Logo from "../../Images/logo.svg";
import Cart from "../../Images/icon-cart.svg";
import Profile from "../../Images/image-avatar.png";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeBtn = () => {
    setShowMenu(false);
  };

  const openBtn = () => {
    setShowMenu(true);
  };

  return (
    <div className="Header">
      {showMenu ? (
        <div className="menu-overlay">
        <div className="menu-container">
          <img src={Close} alt="Close" onClick={closeBtn} />
          <div>
            <p>Collections</p>
            <p>Men</p>
            <p>Woman</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="opacity"></div>
        </div>
        
      ) : null}

      <div className="header-container">
        <div className="group-left">
          <img className="menu" src={Burger} onClick={openBtn} alt="Menu" />
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <div className="group-right">
          <img className="cart" src={Cart} alt="Cart" />
          <img className="profile" src={Profile} alt="Profile" height={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
