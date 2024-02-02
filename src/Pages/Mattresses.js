// Mattresses.js
import React from "react";
import "./Mattresses.css";
import Image from "../constants/assets/c1.jpg"
 

const Mattresses = () => {
  return (
        <div className="mattress-card">
          <img className="mattress-image" src={Image} alt="Cycle" />
          <div className="mattress-details">
            <div className="mattress-info">
              <p>Price: $</p>
              <p>Owner: </p>
            </div>
          </div>
        </div>
  );
};

export default Mattresses;
