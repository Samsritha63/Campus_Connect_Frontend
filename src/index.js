import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Amenities from './Pages/Amenities';
import Events from './Pages/Events';
import Mess from './Pages/Mess';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='amenities' element={<Amenities />} />
        <Route path="events" element={<Events />} />
        <Route path="mess" element={<Mess />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
