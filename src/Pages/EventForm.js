import React, { useState } from "react";
import "./EventForm.css";

const EventForm = ({ isOpen, onClose }) => {
    const [rollNo, setRollNo] = useState('');
    const [couponName, setCouponName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [Website, setWebsite] = useState('');
    const [subEvent, setSubEvents] = useState(false);
    const [registered, setRegistered] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        // For demonstration purposes, just set 'registered' to true
        setRegistered(true);
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
                        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Coupon Name:
                        <input type="text" value={couponName} onChange={(e) => setCouponName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Image:
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Website:
                        <input type="text" value={Website} onChange={(e) => setWebsite(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Sub Events:
                        <input type="text" value={subEvent} onChange={(e) => setSubEvents(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EventForm;
