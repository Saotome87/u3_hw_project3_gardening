const Maintenance = (props) => {
  let listing = "";
  for (let i = 0; i < props.diseases.length; i++) {
    console.log(props.diseases);

    listing += props.diseases[i] + " | ";
  }
  return (
    <div className="maintenance-box plant-info-box">
      <h3>Maintenance Regimen: {props.maintenance}</h3>
      <h4>Pruning Period: {props.pruning}</h4>

      <h4>Common Diseases: {listing} </h4>
      <h4>Pesticide & Fungicide: {props.bugspray}</h4>
    </div>
  );
};

export default Maintenance;
