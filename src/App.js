import React from "react";
import "./App.css";
// import NavBar from "./components/navbar";
// import { useState } from "react";
// import HomePage from "./homepage";
// import PlantButton from "./plantpagebutton";
import gardeningdata from "./data/gardeningdata.json";
import Name from "./components/plantname";
import Plant from "./components/plantpage";
import Picture from "./components/picture";
import Fertilizer from "./components/fertilizer";
import Maintenance from "./components/maintenance";
import Edible from "./components/edible";

function App() {
  return (
    <div className="App">
      <div className="page-grand">
        <div className="page-between-navbar">
          <div className="nav-bar-left nav-bar">
            <div className="nav-bar-left-1 nav-bar-element">Edible</div>
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
          <div className="front-page-calender">
            <h1>This is where the scrolling event calender will be</h1>
          </div>
        </div>
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
    </div>
  );
}

export default App;
