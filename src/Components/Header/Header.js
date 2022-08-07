import React from "react";
import Burger from "./../../Images/icon-menu.svg";
import Logo from "../../Images/logo.svg";
import Cart from "../../Images/icon-cart.svg";
import Profile from "../../Images/image-avatar.png";
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="group-left">
        <img className="menu" src={Burger} alt="Menu" />
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="group-right">
      <img className="cart" src={Cart} alt="Cart" />
        <img className="profile" src={Profile} alt="Profile" height={24}/>
      </div>
    </div>
  );
};

export default Header;
