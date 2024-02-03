import React, { useState } from "react";
import "./Amenities.css";
import Utilities from "./Utilities";
import TopHeader from "./TopHeader";

const Amenities = () => {
  const [selectedTab, setSelectedTab] = useState("Cycles"); // Set "Cycles" as the default tab

  return (
    <div className="amenities-container">
      <header className="App-header">
        <TopHeader />
      </header>
      <div className="amenities-content-container">
        <div className="amenities-tabs">
          <button
            className={`amenities-tab ${selectedTab === "Cycles" ? "active" : "default"}`}
            onClick={() => setSelectedTab("Cycles")}
            style={{ color: "black" }}
          >
            Cycles
          </button>
          <button
            className={`amenities-tab ${selectedTab === "Mattresses" ? "active" : ""}`}
            onClick={() => setSelectedTab("Mattresses")}
            style={{ color: "black" }}
          >
            Mattresses
          </button>
          <button
            className={`amenities-tab ${selectedTab === "Electronics" ? "active" : ""}`}
            onClick={() => setSelectedTab("Electronics")}
            style={{ color: "black" }}
          >
            Electronics
          </button>
          <button
            className={`amenities-tab ${selectedTab === "Others" ? "active" : ""}`}
            onClick={() => setSelectedTab("Others")}
            style={{ color: "black" }}
          >
            Others
          </button>
        </div>
        <div className="amenities-content">
          <Utilities category={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
