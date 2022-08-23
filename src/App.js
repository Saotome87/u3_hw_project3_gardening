import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
// import { useState } from "react";
import HomePage from "./components/homepage";
import gardeningdata from "./data/gardeningdata.json";
import Name from "./components/plantname";
import Plant from "./components/plantpage";
import Picture from "./components/picture";
import Fertilizer from "./components/fertilizer";
import Maintenance from "./components/maintenance";
// import Edible from "./components/edible";

function App() {
  return (
    <div className="App">
      <div className="page-grand">
        <div className="page-between-navbar">
          <HomePage />
        </div>
        <div className="page-navbar">
          {" "}
          <NavBar />
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
