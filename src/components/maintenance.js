const Maintenance (props) => {
  return (
    <div className="plant-info-box">
    <h3>Maintenance Regimen: {props.maintenance}</h3>
    <h4>Pruning Period: {props.pruning}</h4>
    </div>
  )
}

export default Maintenance