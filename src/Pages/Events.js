import React, { useState } from 'react';
import './events.css';
import event1 from '../constants/assets/OIP.jpeg';
import TopHeader from './TopHeader';

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

const Events = () => {

  const events = [
    {
      id: 1,
      name: 'Parsec 4.0',
      image: event1,
      description: 'Description for Event 1.',
      subEvents: [
        { id: 1, name: 'Sub Event 1.1' },
        { id: 2, name: 'Sub Event 1.2' },
        { id: 3, name: 'Sub Event 1.3' },
        { id: 4, name: 'Sub Event 1.4' },
        { id: 5, name: 'Sub Event 1.5' },
        { id: 6, name: 'Sub Event 1.5' },
        { id: 7, name: 'Sub Event 1.5' },
      ],
    },
    {
      id: 2,
      name: 'Event 2',
      image: 'event1.jpg',
      description: 'Description for Event 1.',
      subEvents: [
        { id: 1, name: 'Sub Event 1.1' },
        { id: 2, name: 'Sub Event 1.2' },
      ],
    },
    {
      id: 3,
      name: 'Event 3',
      image: 'event1.jpg',
      description: 'Description for Event 1.',
      subEvents: [
        { id: 1, name: 'Sub Event 1.1' },
        { id: 2, name: 'Sub Event 1.2' },
      ],
    }
    // Add more events as needed
  ];

  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const [selectedSubEvent, setSelectedSubEvent] = useState(null);

  const handleSubEventClick = (subEvent) => {
    setSelectedSubEvent(subEvent);
  };

  const closeRegistrationModal = () => {
    setSelectedSubEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);

  };


  return (
    <>
      <TopHeader />
      <div className="event-page">

        {/* <EventSidebar onEventClick={handleEventClick} /> */}
        <div className="event-sidebar">
          <h2>Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id} className={selectedEvent && event.name === selectedEvent.name ? 'selected' : ''} onClick={() => handleEventClick(event)}>
                {event.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="event-details">
          {selectedEvent ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'sapce-between', alignItems: 'center' }}>

                <img src={selectedEvent.image} alt={selectedEvent.name}
                  style={{ width: '50%', border: '1px solid #ccc' }}
                />
                <h2>{selectedEvent.name}</h2>
              </div>
              <p>{selectedEvent.description}</p>
              {/* <h3>Sub Events</h3> */}
              <ul>
                {selectedEvent.subEvents.map((subEvent) => (
                  <li key={subEvent.id}>
                    {subEvent.name} -{' '}
                    {selectedSubEvent && selectedSubEvent.id === subEvent.id ? (
                      'Registered'
                    ) : (
                      <button onClick={() => handleSubEventClick(subEvent)}>Register</button>
                    )}
                  </li>
                ))}
              </ul>

              {selectedSubEvent && (
                <RegistrationPopup
                  onClose={closeRegistrationModal}
                  subEventName={selectedSubEvent.name}
                />
              )}
            </>
          ) : (
            <p>Select an event from the sidebar to view details.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
