import React, { useState, useEffect } from 'react';
import './events.css';
import event1 from '../constants/assets/OIP.jpeg';
import TopHeader from './TopHeader';
import RegistrationPopup from '../components/RegistrationPopup';
import EventPopup from './EventPopup';
import axios from 'axios';
const Events = () => {
  const [isEventPopupOpen, setEventPopupOpen] = useState(false);
  const [eventdetails,setEventsData]=useState(null);
  const openEventPopup = () => {
    setEventPopupOpen(true);
  };

  const closeEventPopup = () => {
    setEventPopupOpen(false); 
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/events`);
        const data = response.data;
        setEventsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
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
        { id: 6, name: 'Sub Event 1.6' },
        { id: 7, name: 'Sub Event 1.7' },
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
    },

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
                <div className="event-button">
    <button onClick={openEventPopup} style={{ color: "white", borderRadius: "25px", fontWeight: "bold" }}>
      ADD EVENT
    </button>
  </div>
          </ul>
        </div>
        <div className="event-details">
          {selectedEvent ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'sapce-between', alignItems: 'center' }}>

                <img src={selectedEvent.image} alt={selectedEvent.name}
                  style={{ width: '50%', border: '1px solid #ccc' }}
                />
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ fontSize: "40px" }}>{selectedEvent.name}</p>
                  <p>{selectedEvent.description}</p>
                </div>
              </div>

              {/* <h3>Sub Events</h3> */}
              <ul>
                {selectedEvent.subEvents.map((subEvent) => (
                  <li key={subEvent.id}>
                    {subEvent.name} -{' '}
                    {selectedSubEvent && selectedSubEvent.id === subEvent.id ? (
                      'Registered'
                    ) : (
                      <button href={subEvent.registrationLink} onClick={() => handleSubEventClick(subEvent)}>Register</button>
                    )}
                  </li>
                ))}
              </ul>
              <button href={selectedEvent.website_link}>Visit Website</button>
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
              {/* Event Popup */}
      <EventPopup isOpen={isEventPopupOpen} onClose={closeEventPopup} />
      </div>
    </>
  );
};

export default Events;
