import React, { useState } from "react";
import "./Amenities.css";
import Cycles from "./Cycles";
import Mattresses from "./Mattresses";
import Electronics from "./Electronics";
import Others from "./Others";

const Amenities = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="amenities-container">
      <div className="amenities-content-container">
        <div className="amenities-tabs">
          <button
          className={`amenities-tab ${selectedTab === "Cycles" ? "active default" : ""}`}
          onClick={() => setSelectedTab("Cycles")}
          >
          Cycles
          </button>
          <button
            className={`amenities-tab ${selectedTab === "Mattresses" ? "active" : ""}`}
            onClick={() => setSelectedTab("Mattresses")}
          >
            Mattresses
          </button>
          <button
            className={`amenities-tab ${selectedTab === "Electronics" ? "active" : ""}`}
            onClick={() => setSelectedTab("Electronics")}
          >
            Electronics
          </button>
          <button
            className={`amenities-tab ${selectedTab === "Others" ? "active" : ""}`}
            onClick={() => setSelectedTab("Others")}
          >
            Others
          </button>
        </div>
        <div className="amenities-content">
          {selectedTab === "Cycles" && <Cycles />}
          {selectedTab === "Mattresses" && <Mattresses />}
          {selectedTab === "Electronics" && <Electronics />}
          {selectedTab === "Others" && <Others />}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
