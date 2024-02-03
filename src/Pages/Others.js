// Others.js
import React from "react";
import OthersCard from "../components/otherscard";
import Image from "../constants/assets/o1.jpg";
import Image2 from "../constants/assets/o2.jpg";
import Image3 from "../constants/assets/o3.jpg";

const Others = () => {
    const othersData = [
        { image: Image, price: 200, owner: 'Devdatt' },
        { image: Image2, price: 350, owner: 'Altmash' },
        { image: Image3, price: 300, owner: 'Sangeetha' },
    ];

    return (
        <div className="others-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
            {othersData.map((others, index) => (
                <OthersCard key={index} othersData={others} />
            ))}
        </div>
    );
};

export default Others;

