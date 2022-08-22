import React from "react";

const Plant = (props) => {
  return (
    <div className="plant-quick-info-box plant-info-box">
      <div className="plant-quick-info">
        <h4 className="plant-info">Flowering Period: {props.flowering}</h4>
        <h4 className="plant-info">Fruit Ready to Pick: {props.fruit}</h4>
        <h4 className="plant-info">Year Planted: {props.year}</h4>
      </div>
    </div>
  );
};

export default Plant;
