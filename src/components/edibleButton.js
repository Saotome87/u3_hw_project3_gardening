// const Edible = (props) => {
//   return (
//     <div className="page-edible">
//       <button className="button-edible"></button>
//       <button className="button-edible"></button>
//       <button className="button-edible"></button>
//     </div>
//   );
// };

// export default Edible;

const EdibleButton = (props) => {
  return (
    <button className="edible-button" id="btn" onClick={props.toggleInfo}>
      Edible
    </button>
  );
};

export default EdibleButton;
