// ElectronicsCard.js
import React from 'react';
import './electronicscard.css'
const ElectronicsCard = ({ electronicsData }) => {
    const { image, price, owner } = electronicsData;

    return (
        <div className="electronics-card">
            <img className="electronics-image" src={image} alt="Electronics" />
            <div className="electronics-details">
                <div className="electronics-info">
                    <p>Price: ${price}</p>
                    <p>Owner: {owner}</p>
                </div>
            </div>
        </div>
    );
};

export default ElectronicsCard;
