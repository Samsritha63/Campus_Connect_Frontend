// Mattresses.js
import React from "react";
import MattressCard from "../components/mattresscard";
import Image from "../constants/assets/m1.jpg";
import Image2 from "../constants/assets/m2.jpg";
import Image3 from "../constants/assets/m3.jpg";

const Mattresses = () => {
  const mattressesData = [
    { image: Image, price: 65, owner: 'Samsritha' },
    { image: Image2, price: 75, owner: 'sahiti' },
    { image: Image3, price: 70, owner: 'Yagna' },
  ];

  return (
    <div className="mattresses-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
      {mattressesData.map((mattress, index) => (
        <MattressCard key={index} mattressData={mattress} />
      ))}
    </div>
  );
};

export default Mattresses;

