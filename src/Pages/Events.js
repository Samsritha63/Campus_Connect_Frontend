import React, { useState } from 'react';
import './events.css';
import event1 from '../constants/assets/OIP.jpeg';

const App = () => {

  const events = [
    {
      id: 1,
      name: 'Event 1',
      image: event1,
      description: 'Description for Event 1.',
      subEvents: [
        { id: 1, name: 'Sub Event 1.1' },
        { id: 2, name: 'Sub Event 1.2' },
        { id: 3, name: 'Sub Event 1.3' },
        { id: 4, name: 'Sub Event 1.4' },
        { id: 5, name: 'Sub Event 1.5' },
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

  const handleEventClick = (event) => {
    setSelectedEvent(event);

  };


  return (
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
            <h2>{selectedEvent.name}</h2>
            <img src={selectedEvent.image} alt={selectedEvent.name}
              style={{ width: '50%', border: '1px solid #ccc' }}
            />
            <p>{selectedEvent.description}</p>
            {/* <h3>Sub Events</h3> */}
            <ul>
              {selectedEvent.subEvents.map((subEvent) => (
                <li key={subEvent.id}>
                  {subEvent.name} - <button>Register</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Select an event from the sidebar to view details.</p>
        )}
      </div>
    </div>
  );
};

export default App;
