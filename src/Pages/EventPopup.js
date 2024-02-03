import React, { useState } from "react";
import "./EventPopup.css";
import axios from "axios";
import { URL } from '../constants/actionTypes';

const EventPopup = ({ isOpen, onClose }) => {
    const [rollNo, setRollNo] = useState('');
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [Website, setWebsite] = useState('');
    const [subEvents, setSubEvents] = useState([]);
    const [events, setevents] = useState([]);
    const [registrationlink, setregistrationlink]= useState([]);
    const [registered, setRegistered] = useState(false);
    // const URL = "http://10.200.230.209:5000";

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {

            const extractedEvents = subEvents.map((subEvent) => subEvent.name);
            const extractedRegistrationLinks = subEvents.map((subEvent) => subEvent.registrationLink);

            // console.log("Form data:", {
            //     "roll_number": rollNo,
            //     "name": eventName,
            //     "description": description,
            //     "image":image,
            //     "website_link": Website,
            //     "sub_events": {
            //         "names":extractedEvents,
            //         "registrationLinks": extractedRegistrationLinks
            //     }
            // });

            // Make an HTTP POST request to your endpoint
            const response = await axios.post(`${URL}/events`, {
                "roll_number": rollNo,
                "name": eventName,
                "description": description,
                "image":image,
                "website_link": Website,
                "sub_events": {
                    "names":extractedEvents,
                    "registrationLinks": extractedRegistrationLinks
                }
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
        setRegistered(true);
    };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     // Add your registration logic here
    //     // For demonstration purposes, just set 'registered' to true
    //     setRegistered(true);
    // };

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
                {!registered ? <form onSubmit={handleFormSubmit}>
                    <label>
                        Roll No:
                        <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Event Name:
                        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
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
                        {/* Sub Events: */}
                        {subEvents.map((subEvent, index) => (
                            <div style={{marginTop:"20px"}} key={index}>
                                <label>
                                    Sub Event {index + 1}:
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
                        <button style={{marginTop:"20px"}} type="button" onClick={handleAddSubEvent}>
                            Add Sub Event
                        </button>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>: (<div>
                    Added Sucessfully!!
                </div>)}
            </div>
        </div>
    );
};

export default EventPopup;
