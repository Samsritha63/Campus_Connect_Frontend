// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import TopHeader from './TopHeader';
import breakfast from "../constants/assets/breakfast.jpg";
import lunch from "../constants/assets/Lunch.jpg";
import snacks from "../constants/assets/snacks.jpg";
import Dinner from "../constants/assets/Dinner.jpg";
import nonveg from "../constants/assets/nonveg.jpg";
import SpecialD from "../constants/assets/specialDinner.jpg";

const Mess = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error' for failure

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleBuyClick = async () => {
    try {
      // Connect to the backend endpoint
      const response = await fetch('/buyCoupons', {
        method: 'POST',
        // You may need to add headers or send data depending on your backend requirements
      });

      if (response.ok) {
        // Coupon sold successfully
        setSnackbarMessage('Coupon Sold Successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } else {
        // Purchase unsuccessful
        setSnackbarMessage('Purchase Unsuccessful');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error during purchase:', error);
      // Handle other errors if needed
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <div className="add-button-container">
          <button className="add-button">+</button>
        </div>
      </header>

      <main className="main-cards-mess">
        <div className="cards-container">
          <Card title="Breakfast" imageSrc={breakfast} onBuyClick={handleBuyClick} />
          <Card title="Lunch" imageSrc={lunch} onBuyClick={handleBuyClick} />
          <Card title="Snacks" imageSrc={snacks} onBuyClick={handleBuyClick} />
          <Card title="Dinner" imageSrc={Dinner} onBuyClick={handleBuyClick} />
          <Card title="Non-Veg" imageSrc={nonveg} onBuyClick={handleBuyClick} />
          <Card title="Special Dinner" imageSrc={SpecialD} onBuyClick={handleBuyClick} />
          <Card title="Name1" imageSrc={SpecialD} onBuyClick={handleBuyClick} />
          <Card title="Name2" imageSrc={SpecialD} onBuyClick={handleBuyClick} />
          <Card title="Name3" imageSrc={SpecialD} onBuyClick={handleBuyClick} />
        </div>
      </main>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

function Card({ title, onBuyClick, imageSrc }) {
  return (
    <div className="card-mess">
      <div className="card-mess-content">
        <img src={imageSrc} alt={title} />
        <h2 style={{ color: 'black' }}>{title}</h2>
        {/* <p style={{ color: 'black' }}>{content}</p> */}
        <button className="buy-button" onClick={onBuyClick}>Buy</button>
      </div>
    </div>
  );
}

export default Mess;