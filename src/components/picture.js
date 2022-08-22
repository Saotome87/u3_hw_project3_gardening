const Picture = (props) => {
  return (
    <div className="picture-box plant-info-box">
      <img src={props.picture} alt="plant"></img>
    </div>
  );
};

export default Picture;
