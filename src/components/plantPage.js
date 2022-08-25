import gardeningdata from "../data/gardeningdata.json";
import Name from "./plantPageName";
import PlantProfile from "./plantPageProfile";
import Picture from "./plantPagePicture";
import Fertilizer from "./plantPageFertilizer";
import Maintenance from "./plantPageMaintenance";

const PlantPage = () => {
  return (
    <div className="plant-page-container">
      {gardeningdata.map((gdata) => (
        <div className="plants-box">
          {gdata.name.map((names) => (
            <div className="plant-name-box">
              <Name
                key={names.common}
                common={names.common}
                scientific={names.scientific}
              />
            </div>
          ))}
          <div className="plant-profile-box">
            <PlantProfile
              key={gdata.name.common}
              flowering={gdata.flowering}
              fruit={gdata.fruit}
              year={gdata.year}
            />
          </div>
          <div className="plant-picture-box">
            <Picture picture={gdata.picture} />
          </div>
          {gdata.fertilizer.map((ferts) => (
            <div className="fertilizer-box">
              <Fertilizer
                vegetative={ferts.vegetative}
                fruiting={ferts.fruiting}
                rooting={ferts.rooting}
              />
            </div>
          ))}
          {gdata.maintenance.map((maintain) => (
            <div className="maintenance-box">
              <Maintenance
                pruning={maintain.pruning}
                diseases={maintain.diseases}
                bugspray={maintain.bugspray}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlantPage;
