import React, { useState } from 'react';
import './cyclecard.css';

const CycleCard = ({ image, price, owner }) => {
    const [showContact, setShowContact] = useState(false);

    const handleGetInTouch = () => {
        setShowContact(!showContact);
    };

    const cardHeight = showContact ? '450px' : '350px';

    return (
        <div className="cycles-card" style={{ height: cardHeight }}>
            <img className="cycle-image" src={image} alt="Cycle" />
            <div className="cycle-details">
                <div className="cycle-info">
                    <p>Price: ₹{price}</p>
                    <p>Owner: {owner}</p>
                </div>
                <button className="get-in-touch-button" onClick={handleGetInTouch}>
                    Get in Touch
                </button>
                {showContact && (
                    <div className="contact-details">
                        <p>Email: example@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CycleCard;
