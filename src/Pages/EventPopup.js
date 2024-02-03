import React, { useState } from "react";
import "./EventPopup.css";

const EventPopup = ({ isOpen, onClose }) => {
    const [rollNo, setRollNo] = useState('');
    const [couponName, setCouponName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [Website, setWebsite] = useState('');
    const [subEvents, setSubEvents] = useState([]);
    const [registered, setRegistered] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        // For demonstration purposes, just set 'registered' to true
        setRegistered(true);
    };

    const handleAddSubEvent = () => {
        setSubEvents([...subEvents, { name: '', registrationLink: '' }]);
    };

    const handleSubEventChange = (index, key, value) => {
        const updatedSubEvents = [...subEvents];
        updatedSubEvents[index][key] = value;
        setSubEvents(updatedSubEvents);
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
                        {subEvents.map((subEvent, index) => (
                            <div key={index}>
                                <label>
                                    Sub Event Name:
                                    <input
                                        type="text"
                                        value={subEvent.name}
                                        onChange={(e) => handleSubEventChange(index, 'name', e.target.value)}
                                    />
                                </label>
                                <label>
                                    Registration Link:
                                    <input
                                        type="text"
                                        value={subEvent.registrationLink}
                                        onChange={(e) => handleSubEventChange(index, 'registrationLink', e.target.value)}
                                    />
                                </label>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddSubEvent}>
                            Add Sub Event
                        </button>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EventPopup;
