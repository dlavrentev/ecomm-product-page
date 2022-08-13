import React, { useState } from "react";
import MediaQuery from 'react-responsive';
import Close from "../../Images/icon-close.svg";
import Burger from "./../../Images/icon-menu.svg";
import Logo from "../../Images/logo.svg";
import Cart from "../../Images/icon-cart.svg";
import Profile from "../../Images/image-avatar.png";
import Delete from "../../Images/icon-delete.svg";
import Small from "../../Images/image-product-1-thumbnail.jpg";

import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);

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
    <MediaQuery minWidth={701}>
    <div className="header-container">
        <div className="group-left">
          <img className="logo" src={Logo} alt="Logo" />
          <div>
            <p>Collection</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="group-right">
          <img className="cart" src={Cart} onClick={toggleCartBtn} alt="Cart" />
          <img className="profile" src={Profile} alt="Profile" height={24} />
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={700}>
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
            <div>Cart</div>
          </div>
          {emptyCart ? (
            <div className="cart-basket">
            <div>
              <img
                src={Small}
                height="50px"
                style={{ borderRadius: "4px" }}
                alt="Product"
              />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x3 $375.00</p>
              </div>
              <img src={Delete} alt="Product" />
            </div>
            <button>Checkout</button>
          </div>
          ) : <div className="cart-basket-empty">
            Your cart is empty.
          </div>}
          
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
      </MediaQuery>
    </div>
    
  );
};

export default Header;
