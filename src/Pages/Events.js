import React, { useState, useEffect } from 'react';
import './events.css';
// import event1 from '../constants/assets/OIP.jpeg';
import TopHeader from './TopHeader';
import RegistrationPopup from '../components/RegistrationPopup';
import EventPopup from './EventPopup';
import axios from 'axios';
import { URL } from '../constants/actionTypes';
import {useSelector} from "react-redux";



const Events = () => {
  const [isEventPopupOpen, setEventPopupOpen] = useState(false);
  // const [eventdetails,setEventsData]=useState(null);
  const [events, setEvents] = useState([]);

  const openEventPopup = () => {
    setEventPopupOpen(true);
  };

  const closeEventPopup = () => {
    setEventPopupOpen(false); 
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your backend endpoint
        const response = await axios.get(`${URL}/events`);

        // Extract data from the response
        const eventData = response.data;

        // Format the data as per your requirement
        const formattedEvents = eventData.map((event, eventId) => {
          console.log("sub_events", event.sub_events.registrationLink)
          const formattedSubEvents = event.sub_events.names.map((subEventName, subEventId) => ({
            id: subEventId + 1,
            name: subEventName,
            link: event.sub_events.registrationLinks[subEventId],
          }));

          return {
            id: eventId + 1,
            name: event.name,
            image: event.image,
            description: event.description,
            website_link: event.website_link,
            subEvents: formattedSubEvents,
          };
        });

        // Set the formatted data to the state
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const canAddEvent = useSelector((state) => state.userHandler.can_add_event);
  const roll_num_event = useSelector((state) => state.userHandler.roll_no);

  const [selectedSubEvent, setSelectedSubEvent] = useState(null);

  const handleSubEventClick = (subEvent) => {
    setSelectedSubEvent(subEvent);
  };
  // const image_url = selectedEvent.image.replace('/view?usp=drive_link', '/preview')
  const closeRegistrationModal = () => {
    setSelectedSubEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);

  };

  const handleDeleteClick = async (event, eventName) => {
    setSelectedEvent(event);
  
    // if (canAddEvent) {
    //   const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    //   if (confirmDelete) {
      const requestData = {
        roll_no : roll_num_event,
        name:eventName
      }
      console.log(requestData)
        try {
          // Make a DELETE request to your backend endpoint for deleting the event
          await axios.delete(`${URL}/events`, requestData);
  
          // Reload the entire page
          window.location.reload();
        } catch (error) {
          console.error('Error deleting event:', error);
          // Handle error as needed
        }
      }
      return (
        <>
          <TopHeader color="#FFBBD0"/>
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
                    {canAddEvent ?
                    <button onClick={openEventPopup} style={{ color: "white", borderRadius: "25px", fontWeight: "bold" }}>
                      ADD EVENT
                    </button> :
                    null
                  }
    
        
              </div>
              </ul>
            </div>
            <div className="event-details">
              {selectedEvent ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'sapce-between', alignItems: 'center' }}>
                  <iframe className="event-image" src={selectedEvent.image.replace('/view?usp=drive_link', '/preview')} alt="Cycle" />
                    {/* <img src={selectedEvent.image} alt={selectedEvent.name} */}
                      {/* style={{ width: '50%', border: '1px solid #ccc' }}
                    /> */}
                    <div style={{ marginLeft: "10px" }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: "40px" }}>{selectedEvent.name}</p>
        {canAddEvent ? 
          <button onClick={() => handleDeleteClick(selectedEvent, selectedEvent.name)}>
          Delete Event
        </button>
         : null}
      </div>
      <p>{selectedEvent.description}</p>
    </div>
    
                  </div>
    
                  {/* <h3>Sub Events</h3> */}
                  <ul>
                    {selectedEvent.subEvents.map((subEvent) => (
                      <li key={subEvent.id}>
                        {subEvent.name}
                        {selectedSubEvent && selectedSubEvent.id === subEvent.id ? (
                          'Registered'
                        ) : (
                          <button onClick={()=> {
                            window.open(subEvent.link,'_blank');
                          }}>Register</button>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button onClick={()=> {
                    window.open(selectedEvent.website_link,'_blank')
                  }}>Visit Website</button>
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
