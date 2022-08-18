import React from "react";

const Name = (props) => {
  return (
    <div className="plant-name-box">
      <h3>Common Name: {props.common}</h3>
      <h3>Scientific Name: {props.scientific}</h3>
    </div>
  );
};

export default Name;
