import { useState } from "react";
import gardeningdata from "../data/gardeningdata.json";
import HomePage from "./homepage";
import PlantButton from "./plantpagebutton";
import Name from "./plantname";
import Plant from "./plantpage";
import Picture from "./picture";
import Fertilizer from "./fertilizer";
import Maintenance from "./maintenance";

const NavBar = (props) => {
  let [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => {
    if (!showInfo) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <div className="nav-bars-box">
      <div className="nav-bar-left nav-bar">
        <div className="nav-bar-left-1 nav-bar-element">
          Edible
          {showInfo ? <Plant /> : <HomePage />}
          <PlantButton toggleInfo={toggleInfo} />
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

      {gardeningdata.map((gdata) => (
        <div className="plant-page-box">
          {gdata.name.map((names) => (
            <Name
              // key={names.common}
              common={names.common}
              scientific={names.scientific}
            />
          ))}
          <Plant
            // key={gdata.name.common}
            // common={gdata.name.common}
            flowering={gdata.flowering}
            fruit={gdata.fruit}
            year={gdata.year}
          />
          <Picture picture={gdata.picture} />

          {gdata.fertilizer.map((ferts) => (
            <Fertilizer
              vegetative={ferts.vegetative}
              fruiting={ferts.fruiting}
              rooting={ferts.rooting}
            />
          ))}
          {gdata.maintenance.map((maintain) => (
            <Maintenance
              pruning={maintain.pruning}
              diseases={maintain.diseases}
              bugspray={maintain.bugspray}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
