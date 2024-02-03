import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { URL } from "../constants/actionTypes";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        roll_number: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error' for failure

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData, "yyyyyyyyyyyyyyyy")
        try {
            const response = await axios.post(`${URL}/login`, formData);

            if (response.data) {
                // Backend verification successful, navigate to the other page
                setSnackbarMessage('Login successful');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                navigate('/home');

            } else {
                // Handle login failure, show an error message, etc.
                console.error('Login failed:', response);
                setSnackbarMessage('Incorrect password');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Login</h1>

                <div className="form-group">
                    <label htmlFor="roll_number">Roll No:</label>
                    <input
                        type="text"
                        id="roll_number"
                        name="roll_number"
                        value={formData.roll_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <span
                            className="eye-icon"
                            onClick={handleTogglePassword}
                            role="img"
                            aria-label="Toggle Password Visibility"
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </span>
                    </div>
                </div>

                <button type="submit">Login</button>
            </form>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant="filled" severity={snackbarSeverity} onClose={handleSnackbarClose}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default Login;
