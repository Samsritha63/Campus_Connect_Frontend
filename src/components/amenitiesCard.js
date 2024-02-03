import React, { useState } from 'react';
import './amenitiesCard.css';
import axios from 'axios';
import { URL } from '../constants/actionTypes';
import {useSelector} from "react-redux"; 

const AmenitiesCard = ({ image, price, owner, email_id, contact_no, good_number, roll_no}) => {
    const [showContact, setShowContact] = useState(false);
    var roll_no_recv = useSelector((state) => state.userHandler.roll_no)
    const modifiedImageUrl = image.replace('/view?usp=drive_link', '/preview');

    const handleGetInTouch = async () => {
        setShowContact(!showContact);

        // Make the API call to /buyitem using Axios
        
        const request_data = {
            roll_number:roll_no_recv,
            good_number: good_number.toString()
        }

        try {
            const response = await axios.post(`${URL}/buyitem`,
                request_data
            );

            if (response.status === 200) {
                console.log('API call successful');
                // Handle success, update UI or navigate to a new page
            } else {
                console.error('API call failed');
                // Handle failure, show an error message, etc.
            }
        } catch (error) {
            console.error('Error during API call:', error);
            // Handle error, show an error message, etc.
        }
    };


    const cardHeight = showContact ? '530px' : '350px';

    return (
        <div className="cycles-card" style={{ height: cardHeight }}>
            <iframe className="cycle-image" src={modifiedImageUrl} alt="Cycle" />
            <div className="cycle-details">
                <div className="cycle-info">
                    <p>Price: ₹{price}</p>
                    <p>Owner: {owner}</p>
                    {showContact && (
                        <>
                            <p>Email: {email_id}</p>
                            <p>Phone: {contact_no}</p>
                        </>
                    )}
                </div>
                {/* {showContact && (
                    <div className="contact-details">
                        <p>Email: example@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                )} */}
                <button disabled={showContact} className="get-in-touch-button" onClick={handleGetInTouch}>
                    {showContact ? 'Message sent' : 'Get in Touch'}
                </button>
            </div>
        </div>
    );
};

export default AmenitiesCard;

