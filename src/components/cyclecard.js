import React from 'react';
import './cyclecard.css'

const CycleCard = ({ image, price, owner }) => {
    return (
        <div className="cycles-card">
            <img className="cycle-image" src={image} alt="Cycle" />
            <div className="cycle-details">
                <div className="cycle-info">
                    <p>Price: ${price}</p>
                    <p>Owner: {owner}</p>
                </div>
            </div>
        </div>
    );
};

export default CycleCard;