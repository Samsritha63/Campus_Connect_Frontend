import React, { useState } from "react";
import "./Amenities.css";
import Utilities from "./Utilities";
import TopHeader from "./TopHeader";
import SellPopup from "./SellPopup";
import bg3 from "../constants/assets/bg7.jpg"
import {useSelector} from "react-redux"; 
import axios from "axios";
import { URL } from "../constants/actionTypes";

const Amenities = () => {
  const [selectedTab, setSelectedTab] = useState("cycles"); // Set "Cycles" as the default tab
  const [isSellPopupOpen, setSellPopupOpen] = useState(false);

  const [category, setCategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [image, setImage] = useState('');
  const [cost, setCost] =useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error' for unsuccessful
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [registered, setRegistered] = useState(false);
  const [cnt,setCnt]=useState(true);
  var roll_no= JSON.parse(localStorage.getItem("userInfo"))["roll_no"];


  const openSellPopup = () => {
    setSellPopupOpen(true);
  };

  const closeSellPopup = () => {
    setRegistered(false);
    setSellPopupOpen(false); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fetchData = async()=>{
        try{
            console.log(roll_no,"roll number inside the sell pop up")
            var sellItemBody={
                roll_number: roll_no,
                category:category,
                item_name:itemName,
                cost: cost,
                images:image
            };
            
            const response = await axios.post(`${URL}/sellitem`, sellItemBody)
            setCategory("");
            setItemName("");
            setImage("");
            setCost("")
            // onClose=false;
            setRegistered(true);
            setCnt(!cnt);
            setSnackbarSeverity('success');
            setSnackbarMessage('Submission successful!');
            setOpenSnackbar(true);
        }
        catch(error){
            console.error('Error fetching data:', error);
            setSnackbarSeverity('error');
            setSnackbarMessage('Submission failed. Please try again.');
            setOpenSnackbar(true);
    
           }        
    }
   fetchData();
};

  return (
    <div className="App" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}}>
      <header className="App-header">
        <TopHeader color="#87CEEB"/>
      </header>
      <div className="amenities-content-container" style={{overflow:'hidden'}}>
        <div className="amenities-tabs">
          <div
            className={`amenities-tab ${selectedTab === "cycles" ? "active" : "default"}`}
            onClick={() => setSelectedTab("cycles")}
            style={{ color: "black" }}
          >
            Cycles
          </div>
          <div
            className={`amenities-tab ${selectedTab === "mattresses" ? "active" : ""}`}
            onClick={() => setSelectedTab("mattresses")}
            style={{ color: "black" }}
          >
            Mattresses
          </div>
          <div
            className={`amenities-tab ${selectedTab === "electronics" ? "active" : ""}`}
            onClick={() => setSelectedTab("electronics")}
            style={{ color: "black" }}
          >
            Electronics
          </div>
          <div
            className={`amenities-tab ${selectedTab === "Others" ? "active" : ""}`}
            onClick={() => setSelectedTab("Others")}
            style={{ color: "black" }}
          >
            Others
          </div>

          <div className="sell-button">
            <button onClick={openSellPopup} style={{ color: "white", borderRadius: "25px", fontWeight: "bold" }}>
              SELL
            </button>
          </div>
        </div>
        <div className="amenities-content">
          <Utilities cnt={cnt} category={selectedTab} />
          
        </div>
      </div>

      {/* Sell Popup */}
      {/* <SellPopup isOpen={isSellPopupOpen} onClose={closeSellPopup} /> */}
      <div className={`sell-popup ${isSellPopupOpen ? "open" : ""}`}>
          <div className="sell-popup-content">
              <span className="sell-popup-close" onClick={closeSellPopup}>
                  &times;
              </span>
              {!registered ? <form >
                  {/* <label>
                      Roll No:
                      <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                  </label>
                  <br /> */}
                  <label>
                      Category:
                      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                  </label>
                  <br />
                  <label>
                      Item Name:
                      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                  </label>
                  <br />
                  <label>
                      Image:
                      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                  </label>
                  <br />
                  <label>
                      Cost:
                      <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
                  </label>
                  <br />
                  <button type="submit" onClick={handleFormSubmit} >Submit</button>
              </form>: <div>Thank you for registering your item.</div> }
              {/* <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
      >
        {snackbarMessage}
      </MuiAlert>
    </Snackbar> */}
    {/* <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
              <MuiAlert elevation={6} variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
                  {snackbarMessage}
              </MuiAlert>
          </Snackbar> */}
          </div>
      </div>
    </div>
  );
};







export default Amenities;
