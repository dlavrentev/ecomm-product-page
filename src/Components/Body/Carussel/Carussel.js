import React, { useState } from "react";
import "./Carussel.css";
import Pre from "./../../../Images/icon-previous.svg";
import Next from "./../../../Images/icon-next.svg";

const Carussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carussel-container">
      <div className="previousArrow" onClick={goToPrevious}>
        <img src={Pre} alt="Previous Button" />
      </div>
      <div className="nextArrow" onClick={goToNext}>
        <img src={Next} alt="Next Button" />
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* <div>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}></div>
        ))}
      </div> */}
    </div>
  );
};

export default Carussel;
