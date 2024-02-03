import React from "react";
import "./SellPopup.css";

const SellPopup = ({ isOpen, onClose }) => {
    return (
        <div className={`sell-popup ${isOpen ? "open" : ""}`}>
            <div className="sell-popup-content">
                <span className="sell-popup-close" onClick={onClose}>
                    &times;
                </span>
                {/* Add your form elements for roll no, category, item name, cost, images, phone number */}
                <label>Roll No:</label>
                <input type="text" /* Add necessary attributes */ />

                {/* Add other form elements similarly */}

                <button onClick={onClose}>Submit</button>
            </div>
        </div>
    );
};

export default SellPopup;
