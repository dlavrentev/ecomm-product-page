import React from "react";
import "./Description.css";

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
        <div className="previous">$250.00</div>
      </div>

      <div className="add-container">
        <div className="amount">
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <button className="btn-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Description;
