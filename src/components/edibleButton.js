const EdibleButton = (props) => {
  return (
    <button className="edible-button" id="btn" onClick={props.toggleInfo}>
      Edible
    </button>
  );
};

export default EdibleButton;
