// OthersCard.js
import React from 'react';
import './otherscard.css'
const OthersCard = ({ othersData }) => {
    const { image, price, owner } = othersData;

    return (
        <div className="others-card">
            <img className="others-image" src={image} alt="Others" />
            <div className="others-details">
                <div className="others-info">
                    <p>Price: ₹{price}</p>
                    <p>Owner: {owner}</p>
                </div>
            </div>
        </div>
    );
};

export default OthersCard;
