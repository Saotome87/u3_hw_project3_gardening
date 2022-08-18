import React from "react";

const Plant = (props) => {
  return (
    <div className="plant-quick-info plant-info-box">
      <img
        className="plant-info plant-info-pic"
        src={props.picture}
        alt="plant"
      ></img>
      <h4 className="plant-info">Flowering Period: {props.flowering}</h4>
      <h4 className="plant-info">Fruit Ready to Pick: {props.fruit}</h4>
    </div>
  );
};

export default Plant;
