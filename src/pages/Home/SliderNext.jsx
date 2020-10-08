import React from "react";
import NextBtn from "../../assets/sl-next-new.png";

const SliderNext = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    <img src={NextBtn} alt="NextSlide" />
  </button>
);

export default SliderNext;
