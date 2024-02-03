// Electronics.js
import React from "react";
import ElectronicsCard from "../components/electronicscard";
import Image from "../constants/assets/e1.jpg";
import Image2 from "../constants/assets/e2.jpg";
import Image3 from "../constants/assets/e3.jpg";

const Electronics = () => {
    const electronicsData = [
        { image: Image, price: 70000, owner: 'Sangeetha' },
        { image: Image2, price: 5000, owner: 'Vyshnavi' },
        { image: Image3, price: 12000, owner: 'Veekshita' },
    ];

    return (
        <div className="electronics-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
            {electronicsData.map((electronics, index) => (
                <ElectronicsCard key={index} electronicsData={electronics} />
            ))}
        </div>
    );
};

export default Electronics;
