import React, { useState } from "react";
import Close from "../../Images/icon-close.svg";
import Burger from "./../../Images/icon-menu.svg";
import Logo from "../../Images/logo.svg";
import Cart from "../../Images/icon-cart.svg";
import Profile from "../../Images/image-avatar.png";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const closeMenuBtn = () => {
    setShowMenu(false);
  };

  const openMenuBtn = () => {
    setShowMenu(true);
  };

  const toggleCartBtn = () => {
    if (showCart === true) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  return (
    <div className="Header">
      {showMenu ? (
        <div className="menu-overlay">
          <div className="menu-container">
            <img src={Close} alt="Close" onClick={closeMenuBtn} />
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

      {showCart ? (
        <div className="cart-container">
          <div className="cart-heading">
            <p>Cart</p>
          </div>
          <div className="cart-basket">
            <div>
              <img src="" alt="Product" />
              <div>
                <p></p>
                <p></p>
              </div>
              <img src="" alt="Product" />
            </div>
            <button>Checkout</button>
          </div>
        </div>
      ) : null}

      <div className="header-container">
        <div className="group-left">
          <img className="menu" src={Burger} onClick={openMenuBtn} alt="Menu" />
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <div className="group-right">
          <img className="cart" src={Cart} onClick={toggleCartBtn} alt="Cart" />
          <img className="profile" src={Profile} alt="Profile" height={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
