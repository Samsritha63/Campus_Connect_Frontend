import React, { useState } from 'react';
import './amenitiesCard.css';

const AmenitiesCard = ({ image, price, owner }) => {
    const [showContact, setShowContact] = useState(false);

    const handleGetInTouch = () => {
        setShowContact(!showContact);
    };

    const cardHeight = showContact ? '530px' : '350px';

    return (
        <div className="cycles-card" style={{ height: cardHeight }}>
            <img className="cycle-image" src={image} alt="Cycle" />
            <div className="cycle-details">
                <div className="cycle-info">
                    <p>Price: ₹{price}</p>
                    <p>Owner: {owner}</p>
                    {showContact && (
                        <>
                            <p>Email: example@example.com</p>
                            <p>Phone: +1234567890</p>
                        </>
                    )}
                </div>
                {/* {showContact && (
                    <div className="contact-details">
                        <p>Email: example@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                )} */}
                <button className="get-in-touch-button" onClick={handleGetInTouch}>
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default AmenitiesCard;
