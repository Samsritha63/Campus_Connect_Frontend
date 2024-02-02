// Cycles.js
import React from "react";
import "./Cycles.css";
import Image from "../constants/assets/c1.jpg";
import Image2 from "../constants/assets/c2.jpg";
import Image3 from "../constants/assets/c3.jpg";

const Cycles = () => {
  return (
    <div>
      <div className="cycles-container">
        <div className="cycles-card">
          <img className="cycle-image" src={Image} alt="Cycle" />
          <div className="cycle-details">
          <div className="cycle-info">
            <p>Price: $300</p>
            <p>Owner: Sudeshna</p>
          </div>
        </div>
      </div>

      <div className="cycles-card">
        <div className="cycles-card">
          <img className="cycle-image" src={Image2} alt="Cycle" />
          <div className="cycle-details">
          <div className="cycle-info">
            <p>Price: $150</p>
            <p>Owner: Vinoothna</p>
          </div>
        </div>
      </div>
      </div>

      <div className="cycles-card">
      <div className="cycles-card">
        <img className="cycle-image" src={Image3} alt="Cycle" />
        <div className="cycle-details">
          <div className="cycle-info">
            <p>Price: $200</p>
            <p>Owner: Keerthi</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Cycles;
