const EdibleButtonAnnual = (props) => {
  return (
    <button
      className="edible-button-annual"
      id="btn"
      onClick={props.toggleInfo}
    >
      Woody
    </button>
  );
};

export default EdibleButtonAnnual;
