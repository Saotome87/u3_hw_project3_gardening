import React from "react";
import "./App.css";
import gardeningdata from "./data/gardeningdata.json";
import Name from "./components/plantname";
import Plant from "./components/plantpage";
import Picture from "./components/picture";
import Fertilizer from "./components/fertilizer";
import Maintenance from "./components/maintenance";

function App() {
  return (
    <div className="App">
      <div className="front-page">
        <h1>This is the Gardening Landing Page</h1>
        <img
          className="front-page-pic"
          alt="maple"
          src="https://candide.com/img/9c8ffdd9-d2b9-4595-b88f-e19aa0842597/cropped/760x608"
        ></img>
      </div>
      <div className="plant-page">
        <div className="plant-page-grid">
          <div className="plant-page-grid-box1"></div>
          <div className="plant-page-grid-box1"></div>
          <div className="plant-page-grid-box1"></div>
          <div className="plant-page-grid-box1"></div>
          <div className="plant-page-grid-box2"></div>
          <div className="plant-page-grid-box2"></div>
          <div className="plant-page-grid-box2"></div>
          <div className="plant-page-grid-box2"></div>
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
              // scientific={gdata.name.scientific}
              flowering={gdata.flowering}
              fruit={gdata.fruit}
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
                bugspray={maintain.bugspray}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
