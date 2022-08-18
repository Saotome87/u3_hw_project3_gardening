const Fertilizer = (props) => {
  return (
    <div className="plant-info-box">
      <h3>Fertilizer Regimen:</h3>
      <h4>Spring Growth: {props.vegetative}</h4>
      <h4>Blooming and Fruiting: {props.fruiting}</h4>
      <h4>Rooting: {props.rooting}</h4>
    </div>
  );
};

export default Fertilizer;
