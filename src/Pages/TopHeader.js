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
    textDecoration: "underline",
    textDecorationColor: "#000",  // Set underline color to black
    textDecorationThickness: "2px",  // Set the thickness of the underline
  };

  const profileIconStyles = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const imgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // or 'contain' based on your preference
    borderRadius: '50%',
  };

  const imgStyles2 = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // or 'contain' based on your preference
    borderRadius: '50%',
  };

  const Headerstyles = {
    position: 'fixed',
    backgroundColor: color, // Set your desired background color
    position: 'relative', // Use relative positioning
    height: '100px',
  };

  const extraProfileIconStyles = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    top: '25px',
    right: '20px', // Align to the top right corner
    fontSize: '40px',
    color: '#333', // Customize color as needed
  };

  const titles={
    fontFamily: "'Pacifico', cursive",
    paddingRight:"150px"
    // TOP
  }
  

  return (
    <div className="top-header" style={Headerstyles}>
      <Link to="/home">
        <div className="profile-icon" style={profileIconStyles}>
          <img src={"https://s2.dmcdn.net/v/V0rET1aZ1o93N0LiT/x1080"} alt="Profile" style={imgStyles} />
        </div>
      </Link>
      <Link to="/profile">
        <div className="extra-profile-icon" style={extraProfileIconStyles}>
        <img src={ProfileIcon} style={imgStyles2}/>
        <p style={{color:'black', fontSize:'15px', marginTop:'-9px'}}>profile</p>
          {/* <i className="fa fa-user" aria-hidden="true"></i> */}
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
 