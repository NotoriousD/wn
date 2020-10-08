import React from "react";

const CustomSlide = ({
  index,
  props,
  data: { id, title, text, img, list },
}) => {
  return (
    <div className="item" index={id} {...props} key={id}>
      <div className="slider__descr">
        <h2>{title}</h2>
        <p>{text}</p>
        <ul className="mainList">
          {list.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="slider__image">
        <img className="lazy" src={img} alt="Featured image 1" />
      </div>
    </div>
  );
};

export default CustomSlide;
