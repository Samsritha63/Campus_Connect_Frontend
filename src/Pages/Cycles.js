// Cycles.js
import React from "react";
import "./Cycles.css";
import cyclesData from "./cyclesData";  

const Cycles = () => {
  return (
    <div>
      {cyclesData.map((cycle, index) => (
        <div key={index} className="cycle-card">
          <img className="cycle-image" src={cycle.imageUrl} alt="Cycle" />
          <div className="cycle-details">
            <div className="cycle-info">
              <p>Price: ${cycle.price}</p>
              <p>Owner: {cycle.owner}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cycles;
