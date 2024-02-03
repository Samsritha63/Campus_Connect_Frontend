import React from 'react';
import ProfileIcon from '../constants/assets/logo.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TopHeader = ({color}) => {
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
    backgroundColor: color, // Set your desired background color
    position: 'relative', // Use relative positioning
    height: '100px',
  };

  const extraProfileIconStyles = {
    position: 'absolute',
    top: '37px',
    right: '20px', // Align to the top right corner
    fontSize: '40px',
    color: '#333', // Customize color as needed
  };

  

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
      <div className='Title'>Campus Connect </div>
      <div className="Header_names">
        <Link to="/amenities"><div>Amenities</div></Link>
        <Link to="/events"><div>Events</div></Link>
        <Link to="/mess"><div>Coupons</div></Link>
      </div>
    </div>
  );
};

export default TopHeader;
 