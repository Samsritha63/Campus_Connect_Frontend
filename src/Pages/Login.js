// src/App.js
import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        rollNo: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
        // Add your login logic here using formData
        console.log('Login data submitted:', formData);
    };

    return (

        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Login</h1>

                <div className="form-group">
                    <label htmlFor="rollNo">Roll No:</label>
                    <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
