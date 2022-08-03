import React from "react";
import "./Carussel.css";
import Image1 from "../../../Images/image-product-1.jpg";

const Carussel = () => {
  return <div className="carussel-container">
    <img className="image-1" src={Image1} alt="Shoes"></img>
  </div>;
};

export default Carussel;
