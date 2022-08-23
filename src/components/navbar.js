import { useState } from "react";
import EdibleButton from "./edibleButton";
import HomePage from "./homepage";
import Edible from "./edible";

const NavBar = () => {
  let [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    if (!showInfo) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <div className="nav-bar-box">
      <div className="nav-bar-left nav-bar">
        <div className="nav-bar-left-1 nav-bar-element">
          {showInfo ? <Edible /> : <HomePage />}
          <EdibleButton toggleInfo={toggleInfo} />
        </div>
        <div className="nav-bar-left-2 nav-bar-element">Ornamental</div>
        <div className="nav-bar-left-3 nav-bar-element">3</div>
        <div className="nav-bar-left-4 nav-bar-element">4</div>
      </div>
      <div className="nav-bar-right nav-bar">
        <div className="nav-bar-right-1 nav-bar-element">Gallery</div>
        <div className="nav-bar-right-2 nav-bar-element">2</div>
        <div className="nav-bar-right-3 nav-bar-element">Calender</div>
        <div className="nav-bar-right-4 nav-bar-element">4</div>
      </div>
    </div>
  );
};

export default NavBar;
