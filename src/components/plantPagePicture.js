const Picture = (props) => {
  return (
    <div className="plant-info-box">
      <img className="picture-box" src={props.picture} alt="plant"></img>
    </div>
  );
};

export default Picture;
