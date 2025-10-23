import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign_Up.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.phone) {
            tempErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Phone number must be exactly 10 digits.";
        }
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email address is invalid.";
        }
        if (!formData.password) {
            tempErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters long.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", formData);
            alert("Sign up successful!");
        }
    };

    const handleReset = () => {
        setFormData({ name: '', phone: '', email: '', password: '' });
        setErrors({});
    };

    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1">
                    Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}> Login</Link></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your name" />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="Enter your phone number" />
                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Enter your password" />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" onClick={handleReset} className="btn btn-danger">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;