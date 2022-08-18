import React from "react";
import "./App.css";
import gardeningdata from "./data/gardeningdata.json";
import Plant from "./components/plantpage";
import Name from "./components/plantname";

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
        {gardeningdata.map((gdata) => (
          <div className="plant-page-component">
            {gdata.name.map((names) => (
              <Name
                key={names.common}
                common={names.common}
                scientific={names.scientific}
              />
            ))}
            <Plant
              key={gdata.name.common}
              // common={gdata.name.common}
              // scientific={gdata.name.scientific}
              picture={gdata.picture}
              flowering={gdata.flowering}
              fruit={gdata.fruit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
