import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description-container">
      <div className="info">
        <p className="company-p">SNEAKER COMPANY</p>
        <p className="model-p">Fall Limited Edition Sneakers</p>
        <p className="text-p">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price">
        <div className="atm"></div>
        <button className="discount"></button>
        <div className="previous"></div>
      </div>

      <div className="add"></div>
    </div>
  );
};

export default Description;
