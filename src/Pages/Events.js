import React, { useState } from 'react';
import './events.css';
import event from '../assests/OIP.jpeg';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    
  };

  const events = [
    {
      id: 1,
      name: 'Event 1',
      image: 'event1.jpg',
      description: 'Description for Event 1.',
      subEvents: [
        { id: 1, name: 'Sub Event 1.1' },
        { id: 2, name: 'Sub Event 1.2' },
        { id: 3, name: 'Sub Event 1.2' },
        { id: 4, name: 'Sub Event 1.2' },
        { id: 5, name: 'Sub Event 1.2' },
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

  return (
    <div className="event-page">
      {/* <EventSidebar onEventClick={handleEventClick} /> */}
      <div className="event-sidebar">
        <h2>Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id} className={selectedEvent && event.name==selectedEvent.name ? 'selected':''} onClick={() => handleEventClick(event)}>
              {event.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="event-details">
        {selectedEvent ? (
          <>
            <h2>{selectedEvent.name}</h2>
            <img src={event} alt={selectedEvent.name} />
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
