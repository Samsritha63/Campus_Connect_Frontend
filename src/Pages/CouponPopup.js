import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { URL } from '../constants/actionTypes';

import "./EventPopup.css";
import Snackbar from '@mui/material/Snackbar';

const EventPopup = ({ isOpen, onClose }) => {
    const [roll_no, setRollNo] = useState('');
    const [category, setCouponName] = useState('');
    // const [image, setImage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an HTTP POST request to your endpoint
            const response = await axios.post(`${URL}/coupons`, {
                roll_no,
                category,
                // image,
            });

            // Check the response and handle it accordingly
            if (response.status === 200) {
                console.log('Form data sent successfully');
                // You can perform additional actions here if needed
            } else {
                console.error('Error sending form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={`eventform ${isOpen ? "open" : ""}`}>
            <div className="eventform-content">
                <span className="eventform-close" onClick={onClose}>
                    &times;
                </span>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Roll No:
                        <input type="text" value={roll_no} onChange={(e) => setRollNo(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Coupon Name:
                        <input type="text" value={category} onChange={(e) => setCouponName(e.target.value)} />
                    </label>
                    <br />
                    {/* <label>
                        Image:
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <br /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EventPopup;
