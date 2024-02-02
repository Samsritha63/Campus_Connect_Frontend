// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import TopHeader from './TopHeader';
import amenities from "../constants/assets/amenities.jpg";
import Event from "../constants/assets/Event.jpg";
import coupons from "../constants/assets/coupons.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
      </header>

      <main className="main-cards">
        <Link to="/Amenities">
          <Card
            title="Amenities"
            content="Explore our top-notch amenities."
            imageSrc={amenities}
          />
        </Link>
        <Link to="/Events">
          <Card
            imageSrc={Event}
            title="Events"
            content="Check out upcoming events and activities."
          />
        </Link>
        <Link to="/Mess">
          <Card
            title="Mess"
            content="Save on your meals with exclusive mess coupons."
            imageSrc={coupons}
          />
        </Link>
      </main>
    </div>
  );
}

function Card({ title, content, imageSrc }) {
  return (
    <div className="card">
      <div className="card-content">
        <img src={imageSrc} alt={title} />
        <h2 style={{ color: 'black' }}>{title}</h2>
        <p style={{ color: 'black' }}>{content}</p>
      </div>
    </div>
  );
}

export default App;
