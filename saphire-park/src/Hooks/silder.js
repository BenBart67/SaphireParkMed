import React, { useState } from "react";
import "./../components/Option1Video3/Option1Video3.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };



  return (
    <div>
        <img
        className="polygon-1"
        onClick={nextSlide}
        src="https://anima-uploads.s3.amazonaws.com/projects/613fa78586bd2aceeb55e163/releases/613fb065eb5d68be95fadc2d/img/polygon-1@1x.png"
      />
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
