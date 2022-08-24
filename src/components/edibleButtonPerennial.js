const EdibleButtonPerennial = (props) => {
  return (
    <button
      className="edible-button-perennial"
      id="btn"
      onClick={props.toggleInfo}
    >
      Woody
    </button>
  );
};

export default EdibleButtonPerennial;
