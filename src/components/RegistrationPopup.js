import React, { useState } from 'react';
import '../Pages/events.css';

const RegistrationPopup = ({ onClose, subEventName }) => {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        // For demonstration purposes, just set 'registered' to true
        setRegistered(true);
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Register for {subEventName}</h2>
                {registered ? (
                    <p>Successfully registered!</p>
                ) : (
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Roll No:
                            <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationPopup;