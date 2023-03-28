import { React, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Header from "../Header/Header";
import SaveData from "../SaveData/SaveData";
import "./Home.css";

function Home() {
  const [showSaveData, setShowSaveData] = useState(false);

  const handleSaveDataComponent = () => {
    setShowSaveData(!showSaveData);
  };

  return (
    <div>
      <div>
        <Header handleSaveDataComponent={handleSaveDataComponent} />
      </div>

      
      <div className="home-component">
        {showSaveData ? <SaveData /> : <DataTable /> }
        
      </div>

      {/* {toggleST && (
        <div className="save-data-comp">
          <SaveData />
        </div>
      )} */}
    </div>
  );
}

export default Home;
