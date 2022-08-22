const Maintenance = (props) => {
  return (
    <div className="maintenance-box plant-info-box">
      <h3>Maintenance Regimen: {props.maintenance}</h3>
      <h4>Pruning Period: {props.pruning}</h4>
      <h4>Common Diseases: {props.diseases}</h4>
      <h4>Pesticide & Fungicide: {props.bugspray}</h4>
    </div>
  );
};

export default Maintenance;
