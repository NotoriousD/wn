import React from "react";
import PrevBtn from "../../assets/sl-prev-new.png";

const SliderPrev = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    <img src={PrevBtn} alt="PrevSlide" />
  </button>
);

export default SliderPrev;
