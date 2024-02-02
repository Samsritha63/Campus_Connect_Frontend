// Mattresses.js
import React from "react";
import "./Mattresses.css";
import Image from "../constants/assets/m1.jpg";
import Image2 from "../constants/assets/m2.jpg";
import Image3 from "../constants/assets/m3.jpg";

const Mattresses = () => {
  return (
    <div className="mattresses-container">
      <div className="mattress-card">
        <img className="mattress-image" src={Image} alt="Cycle" />
        <div className="mattress-details">
          <div className="mattress-info">
            <p>Price: $65</p>
            <p>Owner: Samsritha</p>
          </div>
        </div>
      </div>

      <div className="mattress-card">
        <img className="mattress-image" src={Image2} alt="Cycle" />
        <div className="mattress-details">
          <div className="mattress-info">
            <p>Price: $75</p>
            <p>Owner: sahiti</p>
          </div>
        </div>
      </div>

      <div className="mattress-card">
        <img className="mattress-image" src={Image3} alt="Cycle" />
        <div className="mattress-details">
          <div className="mattress-info">
            <p>Price: $70</p>
            <p>Owner: Yagna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mattresses;
