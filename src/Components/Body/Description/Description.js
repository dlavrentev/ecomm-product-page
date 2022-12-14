import React from "react";
import "./Description.css";
import Minus from './../../../Images/icon-minus.svg'
import Plus from './../../../Images/icon-plus.svg'
import Cart from './../../../Images/icon-cart-white.svg'
import MediaQuery from 'react-responsive';

const Description = () => {
  return (
    <div className="description-container">
      <div className="info-container">
        <p className="company-p">SNEAKER COMPANY</p>
        <p className="model-p">Fall Limited Edition Sneakers</p>
        <p className="text-p">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price-container">
        <div className="price-container-left">
          <div className="atm">$125.00</div>
          <button className="discount">50%</button>
        </div>
        <MediaQuery maxWidth={700}><div className="previous">$250.00</div></MediaQuery>
      </div>
      <MediaQuery minWidth={701}><div className="previous">$250.00</div></MediaQuery>
      <div className="add-container">
        <div className="amount">
            <img className="operator minus" src={Minus} alt="minus" />
            <p>0</p>
            <img className="operator plus" src={Plus} alt="plus" />
        </div>
        <button className="btn-cart">
            <img src={Cart} alt="Cart" />
            <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Description;
