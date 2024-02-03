import React from 'react';
import ProfileIcon from '../constants/assets/logo.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TopHeader = () => {
  const profileIconStyles = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '75px',
    height: 'auto',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const extraProfileIconStyles = {
    position: 'absolute',
    top: '37px',
    right: '20px', // Align to the top right corner
    fontSize: '40px',
    color: '#333', // Customize color as needed
  };

  const searchBarStyles = {
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px',
    height: '60px',
    border: 'None',
    // border: '2px solid black',
    borderRadius: '25px',

  };

  const lineStyle = {
    position: 'absolute',
    top: '120px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    borderBottom: '1px solid #ccc', // Grey line below the TopHeader
  };

  const textStyle = {
    position: 'absolute',
    top: '100px',
    left: '40px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#333',
  };

  return (
    <div className="top-header">
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
      {/* <Link to="/" exact render={() => <StudentDetails />} /> */}
      {/* <Route path="/profile" component={Profile} /> */}
      <div className="search-bar" style={searchBarStyles}>
        <input type="text" placeholder="        Search..." style={{ width: '100%', height: '75%', borderRadius: '25px' }} />
      </div>

      <div style={textStyle}>
        IITDh
      </div>
      <div style={lineStyle}></div>
    </div>
  );
};

export default TopHeader;
