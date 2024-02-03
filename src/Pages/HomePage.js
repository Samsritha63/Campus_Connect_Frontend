// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import TopHeader from './TopHeader';
import amenities from "../constants/assets/amenities.jpg";
import Event from "../constants/assets/Event.jpg";
import coupons from "../constants/assets/coupons.jpg";
import bg2 from "../constants/assets/bg2.jpg"
// import Mess from './Mess';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'contain', backgroundPosition: 'bottom' , height: '100vh'}}>
      <header className="App-header">
        <TopHeader color="#8F5A8E"/>
      </header>

      <main className="main-cards">
        <Link to="/Amenities">
          <Card
            title="Memories On Sale"
            content="Is this a Fish Market? It might just as well be!"
            imageSrc={amenities}
          />
        </Link>
        <Link to="/Events">
          <Card
            imageSrc={Event}
            title="Events"
            content="You definitely did not register yet..."
          />
        </Link>
        <Link to="/Mess">
          <Card
            title="Save your meal"
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
