import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
// import { useState } from "react";
import HomePage from "./components/homepage";
// import gardeningdata from "./data/gardeningdata.json";
// import Name from "./components/plantname";
// import PlantProfile from "./components/plantPageProfile";
// import Picture from "./components/picture";
// import Fertilizer from "./components/fertilizer";
// import Maintenance from "./components/maintenance";
import PlantPage from "./components/plantPage";

function App() {
  return (
    <div className="App">
      <div className="app-page-navbar">
        <NavBar />
      </div>

      <div className="app-page-grand">
        <div className="page-between-navbar">
          <HomePage />
        </div>

        <div className="app-plant-page">
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
          <PlantPage />
        </div>
      </div>
    </div>
  );
}

export default App;
