const Name = (props) => {
  return (
    <div className="plant-info-box">
      <h2>Common Name: {props.common}</h2>
      <h2>Scientific Name: {props.scientific}</h2>
    </div>
  );
};

export default Name;
