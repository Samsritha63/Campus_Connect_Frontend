// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios'
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

  const [formData, setFormData] = useState({
    roll_number: '',
    category: '',
});

const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value,
  });
};

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error' for failure

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleBuyClick = async () => {
    try {
      console.log("yo entered try block");
      // Connect to the backend endpoint
      const response = await axios.post(`${URL}/buyCoupons`, formData);
      console.log(response, "yyyyyyyyyyyyyy");
      if (response.ok) {
        // Coupon sold successfully
        console.log(response, "yyyyyyyyyyyyyy if ififififif");
        setSnackbarMessage('Coupon Sold Successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } else {
        console.log(response, "yyyyyyyyyyyyyy if elselse");
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