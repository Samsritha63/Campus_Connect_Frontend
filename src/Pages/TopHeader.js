import React from 'react';
import ProfileIcon from '../constants/assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

const TopHeader = ({color}) => {
  const location = useLocation();

  const isActive = (path) => {
    // Check if the current path matches the provided path
    return location.pathname === path;
  };

  const activeLinkStyle = {
    border: "2px solid #333",
    borderRadius: "10px",
  };

  const profileIconStyles = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '75px',
    height: 'auto',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const Headerstyles = {
    position: 'fixed',
    backgroundColor: color, // Set your desired background color
    position: 'relative', // Use relative positioning
    height: '100px',
  };

  const extraProfileIconStyles = {
    position: 'absolute',
    top: '25px',
    right: '20px', // Align to the top right corner
    fontSize: '40px',
    color: '#333', // Customize color as needed
  };

  const titles={
    fontFamily: "'Pacifico', cursive",
    // TOP
  }
  

  return (
    <div className="top-header" style={Headerstyles}>
      <Link to="/home">
        <div className="profile-icon" style={profileIconStyles}>
          <img src={ProfileIcon} alt="Profile" style={profileIconStyles} />
        </div>
      </Link>
      <Link to="/profile">
        <div className="extra-profile-icon" style={extraProfileIconStyles}>
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
      </Link>
      <div className='Title' style={titles}>Campus Connect </div>
      <div className="Header_names">
      <Link to="/amenities" style={isActive('/amenities') ? activeLinkStyle : null}>
        <div>Amenities</div>
      </Link>
      <Link to="/events" style={isActive('/events') ? activeLinkStyle : null}>
        <div>Events</div>
      </Link>
      <Link to="/mess" style={isActive('/mess') ? activeLinkStyle : null}>
        <div>Coupons</div>
      </Link>
      </div>
    </div>
  );
};

export default TopHeader;
 