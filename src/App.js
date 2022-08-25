import React from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./components/homepage";
import PlantPage from "./components/plantPage";
import gardeningdata from "./data/gardeningdata.json";

function App() {
  let annualArray = [];
  let perennialArray = [];
  let woodyArray = [];

  let [displayAnnual, setDisplayAnnual] = useState(false);
  let [displayPerennial, setDisplayPerennial] = useState(false);
  let [displayWoody, setDisplayWoody] = useState(false);

  const edibleTypes = () => {
    for (let i = 0; i < gardeningdata.length; i++) {
      if (gardeningdata[i].type === "Annual") {
        annualArray.push(gardeningdata[i]);
      } else if (gardeningdata[i].type === "Perennial") {
        perennialArray.push(gardeningdata[i]);
      } else if (gardeningdata[i].type === "Woody") {
        woodyArray.push(gardeningdata[i]);
      }
    }
    console.log(annualArray);
    console.log(perennialArray);
    console.log(woodyArray);
  };

  edibleTypes();

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
