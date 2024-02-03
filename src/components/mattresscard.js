// MattressCard.js
import React from 'react';
import './mattresscard.css'
const MattressCard = ({ mattressData }) => {
    const { image, price, owner } = mattressData;

    return (
        <div className="mattress-card">
            <img className="mattress-image" src={image} alt="Cycle" />
            <div className="mattress-details">
                <div className="mattress-info">
                    <p>Price: ₹{price}</p>
                    <p>Owner: {owner}</p>
                </div>
            </div>
        </div>
    );
};

export default MattressCard;
