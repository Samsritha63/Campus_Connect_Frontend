// Cycles.js
// import React from "react";
// import Image1 from "../constants/assets/c1.jpg";
// import Image2 from "../constants/assets/c2.jpg";
// import Image3 from "../constants/assets/c3.jpg";
// import Image4 from "../constants/assets/m1.jpg";
// import Image5 from "../constants/assets/m2.jpg";
// import Image6 from "../constants/assets/m3.jpg";
// import Image7 from "../constants/assets/e1.jpg";
// import Image8 from "../constants/assets/e2.jpg";
// import Image9 from "../constants/assets/e3.jpg";
// import Image10 from "../constants/assets/o1.jpg";
// import Image11 from "../constants/assets/o2.jpg";
// import Image12 from "../constants/assets/o3.jpg";
// import AmenitiesCard from "../components/amenitiesCard";

// const Cycles = ({ category }) => {
//   let selectedData;

//   switch (category) {
//     case "Cycles":
//       selectedData = [
//         { image: Image1, price: 10000, owner: "Sudeshna" },
//         { image: Image2, price: 6000, owner: "Vinoothna" },
//         { image: Image3, price: 3500, owner: "Keerthi" },
//       ];
//       break;
//     case "Mattresses":
//       selectedData = [
//         { image: Image4, price: 900, owner: 'Samsritha' },
//         { image: Image5, price: 1300, owner: 'Sahithy' },
//         { image: Image6, price: 1200, owner: 'Yagna' },
//       ];
//       break;
//     case "Electronics":
//       selectedData = [
//         { image: Image7, price: 70000, owner: 'Sangeetha' },
//         { image: Image8, price: 5000, owner: 'Vyshnavi' },
//         { image: Image9, price: 12000, owner: 'Veekshita' },
//       ];
//       break;
//     case "Others":
//       selectedData = [
//         { image: Image10, price: 200, owner: 'Devdatt' },
//         { image: Image11, price: 350, owner: 'Altmash' },
//         { image: Image12, price: 300, owner: 'Rahul' },
//       ];
//       break;
//     default:
//       selectedData = [
//         { image: Image1, price: 10000, owner: "Sudeshna" },
//         { image: Image2, price: 6000, owner: "Vinoothna" },
//         { image: Image3, price: 3500, owner: "Keerthi" },
//       ];
//   }

//   return (
//     <div className="cycles-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
//       {selectedData.map((item, index) => (
//         <AmenitiesCard key={index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default Cycles;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AmenitiesCard from "../components/amenitiesCard";
import { URL } from "../constants/actionTypes";

const Cycles = ({ cnt, category }) => {
  const [selectedData, setSelectedData] = useState([]);
  console.log(category)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${URL}/getItems`, { 'category': category });
        const data = response.data;

        // Filter the data based on the selected category
        // const filteredData = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
        setSelectedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [category, cnt]);

  return (
    <div className="cycles-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
      {selectedData.map((item, index) => (
        <AmenitiesCard
          key={item.unique_good_number}
          image={item.images}  // Assuming your API returns "images" field for the image URL
          price={item.cost}    // Assuming your API returns "cost" field for the item price
          owner={item.name}
          email_id={item.email_id}
          contact_no = {item.contact_no}
          good_number = {item.unique_good_number}
          roll_no = {item.roll_no}
           // Assuming your API returns "roll_no" field for the owner
          // Add other necessary fields accordingly
        />
      ))}
    </div>
  );
};

export default Cycles;

