import gardeningdata from "../data/gardeningdata.json";
import Name from "./plantname";
import PlantProfile from "./plantPageProfile";
import Picture from "./picture";
import Fertilizer from "./fertilizer";
import Maintenance from "./maintenance";

const PlantPage = () => {
  return (
    <div className="plant-page-box">
      {gardeningdata.map((gdata) => (
        <div className="plantname-box">
          {gdata.name.map((names) => (
            <Name
              // key={names.common}
              common={names.common}
              scientific={names.scientific}
            />
          ))}
          <PlantProfile
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

export default PlantPage;
