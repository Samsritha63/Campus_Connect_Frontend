// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import TopHeader from './TopHeader';
import breakfast from "../constants/assets/breakfast.jpg";
import lunch from "../constants/assets/Lunch.jpg";
import snacks from "../constants/assets/snacks.jpg";
import Dinner from "../constants/assets/Dinner.jpg";
import nonveg from "../constants/assets/nonveg.jpg";
import SpecialD from "../constants/assets/specialDinner.jpg";
const Mess=() => {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
      </header>

      <main className="main-cards-mess">
        <div className="cards-container">
          <Card title="Breakfast" imageSrc={breakfast} />
          <Card title="Lunch" imageSrc={lunch} />
          <Card title="Snacks" imageSrc={snacks} />
          <Card title="Dinner" imageSrc={Dinner} />
          <Card title="Non-Veg" imageSrc={nonveg} />
          <Card title="Special Dinner" imageSrc={SpecialD} />
        </div>
      </main>
    </div>
  );
}

function Card({ title, content, imageSrc }) {
  return (
    <div className="card-mess">
      <div className="card-mess-content">
        <img src={imageSrc} alt={title} />
        <h2 style={{ color: 'black' }}>{title}</h2>
        <p style={{ color: 'black' }}>{content}</p>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
}

export default Mess;
