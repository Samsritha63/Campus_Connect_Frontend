// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import ProfileIcon from '../constants/assets/logo.jpg'; // Import your profile icon image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
      </header>

      <main className="main-cards">
        <Link to="/Amenities">
          <Card title="Amenities" content="Explore our top-notch amenities." />
        </Link>
        <Link to="/Events">
          <Card title="Events" content="Check out upcoming events and activities." />
        </Link>
        <Link to="/Mess">
          <Card title="Mess" content="Save on your meals with exclusive mess coupons." />
        </Link>
      </main>
    </div>
  );
}

function TopHeader() {
  const profileIconStyles = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '100px',
    height: 'auto',
    borderRadius: '50%',
  };
  const extraProfileIconStyles = {
    position: 'absolute',
    top: '10px',
    right: '20px', // Align to the top right corner
    fontSize: '40px',
    color: '#333', // Customize color as needed
  };
  const searchBarStyles = {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px',
    height: '60px',
    border:'None',
  };

  const textStyle = {
    position: 'absolute',
    top: '120px',
    left: '50px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#333',
  };

  return (
    <div className="top-header">
      <div className="profile-icon" style={profileIconStyles}>
        <img src={ProfileIcon} alt="Profile" style={profileIconStyles} />
      </div>
      <div className="extra-profile-icon" style={extraProfileIconStyles}>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
      <div className="search-bar" style={searchBarStyles}>
        <input type="text" placeholder="Search..." style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={textStyle}>
        IITDh
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="card">
      <h2 style={{ color: 'black' }}>{title}</h2>
      <p style={{ color: 'black' }}>{content}</p>
    </div>
  );
}

export default App;
