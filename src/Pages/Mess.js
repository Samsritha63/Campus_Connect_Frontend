// src/Mess.js
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
import CouponPopup from './CouponPopup';
import {useSelector} from "react-redux"; 
import exportFromJSON from 'export-from-json';
import { URL } from '../constants/actionTypes';
import bg5 from "../constants/assets/bg7.jpg"

const Mess = () => {
  const navigate = useNavigate();

  const [isPopupOpen, setPopupOpen] = useState(false);
const canAddCoupons = JSON.parse(localStorage.getItem("userInfo"))["can_add_coupons"];
  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const [isEventPopupOpen, setEventPopupOpen] = useState(false);

  const openEventPopup = () => {
    setEventPopupOpen(true);
  };

  const closeEventPopup = () => {
    setEventPopupOpen(false); 
  };

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
  const rollNo = JSON.parse(localStorage.getItem("userInfo"))["roll_no"];

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const downloadExcelFile = async () => {
    console.log("calling this function")
    try {
      axios
        .post(`${URL}/getCSV`, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
          }
        })
       
        .then((response) => {
          
          const data = response.data;
          const fileName = 'coupons data';
        const exportType = 'xls';
          exportFromJSON({ data, fileName, exportType });
        
        });
    } catch (error) {
      console.error("Error downloading the excel file in the backend:", error);
    }
  };

  const handleBuyClick = async (category) => {
    // Assuming you have a roll number available, replace 'yourRollNumber' with the actual roll number
  
    // Update formData with roll number and category
    const requestData = {
      roll_no: rollNo,
      category: category,
    };
  
    // Open the popup
    // setPopupOpen(true);
  
    try {
      console.log("Entered try block");
      console.log(requestData, "this is going to db");
      
      // Connect to the backend endpoint
      const response = await axios.post(`${URL}/buyCoupons`, requestData);
  
      console.log(response, "Response");
      
      if (response.status === 200) {
        // Coupon sold successfully
        console.log("Successful purchase");
        setSnackbarMessage('Coupon Sold Successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } else {
        console.log("Unsuccessful purchase");
        // Purchase unsuccessful
        setSnackbarMessage('Purchase Unsuccessful');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error during purchase:', error);
      // Handle other errors if needed
      setSnackbarMessage('Purchase Unsuccessful');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="App" style={{
      backgroundImage: `url(${bg5})`,
      backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat'
    }}
    >
      <header className="App-header" >
        <TopHeader color="#87CEEB"/>
        <div className="add-button-container">
        {canAddCoupons && <button style={{borderRadius:"25px", fontWeight:"bold"}} onClick={downloadExcelFile}>Download Data</button>}
        </div>
       
      </header>

      <main style={{ backgroundImage: `url(${bg5})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} className="main-cards-mess">
        <div className="cards-container">
          <Card title="Breakfast" imageSrc={breakfast} onBuyClick={() => handleBuyClick("Breakfast")} />
          <Card title="Lunch" imageSrc={lunch} onBuyClick={() => handleBuyClick("Lunch")}/>
          <Card title="Snacks" imageSrc={snacks} onBuyClick={() => handleBuyClick("Snacks")}/>
          <Card title="Dinner" imageSrc={Dinner} onBuyClick={() => handleBuyClick("Dinner")}/>
          <Card title="Non-Veg" imageSrc={nonveg} onBuyClick={() => handleBuyClick("Non-Veg")}/>
          <Card title="Special Dinner" imageSrc={SpecialD} onBuyClick={() => handleBuyClick("Special Dinner")}/>
          <Card title="Name1" imageSrc={SpecialD} onBuyClick={() => handleBuyClick("Name1")}/>
          <Card title="Name2" imageSrc={SpecialD} onBuyClick={() => handleBuyClick("Name2")}/>
          <Card title="Name3" imageSrc={SpecialD} onBuyClick={() => handleBuyClick("Name3")}/>
        </div>
      </main>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      {isPopupOpen && (
        <Popup onClose={handlePopupClose} />
      )}
            <CouponPopup isOpen={isEventPopupOpen} onClose={closeEventPopup} />

    </div>
  );
}

function Popup({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <span className="popup-close" onClick={onClose}>&times;</span>
        <p>Coupon Bought Successfully!</p>
      </div>
    </div>
  );
}

function Card({ title, imageSrc, onBuyClick }) {
  const cardStyle = {
    position: 'relative',
    height: '350px', // Set the desired height
    width: '200px', // Set the width to 100%
    overflow: 'hidden',
    borderRadius: '10px', // Add border-radius for rounded corners
  };
  const imageStyle = {
    width: '200px',
    height: '60%', // Set the image height to 70% of the card height
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0', // Add border-radius only to the top corners
  };
  const titleStyle = {
    fontSize: '20px', // Adjust the font size as needed
    color: 'black',
  };
  const buttonStyle = {
    // fontWeight: 'bold',
    fontSize: '16px'
  }
  return (
    <div className="card-mess" style={cardStyle}>
      <div className="card-mess-content">
        <img src={imageSrc} alt={title} style = {imageStyle} />
        <h2 style={titleStyle}>{title}</h2>
        {/* <p style={{ color: 'black' }}>{content}</p> */}
        <button className="buy-button" onClick={onBuyClick} style = {buttonStyle}>Buy</button>
      </div>
    </div>
  );
}

export default Mess;