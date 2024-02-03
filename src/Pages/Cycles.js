// Cycles.js
import React from "react";
import Image from "../constants/assets/c1.jpg";
import Image2 from "../constants/assets/c2.jpg";
import Image3 from "../constants/assets/c3.jpg";
import CycleCard from "../components/cyclecard";

const Cycles = () => {
  const cyclesData = [
    { image: Image, price: 300, owner: "Sudeshna" },
    { image: Image2, price: 150, owner: "Vinoothna" },
    { image: Image3, price: 200, owner: "Keerthi" },
  ];

  return (
    <div className="cycles-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
      {cyclesData.map((cycle, index) => (
        <CycleCard key={index} {...cycle} />
      ))}
    </div >
  );
};

export default Cycles;
