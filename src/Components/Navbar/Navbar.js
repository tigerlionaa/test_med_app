// Import React and useState hook
import React, { useState } from 'react';
// Import the corresponding CSS file
import './Navbar.css';

// Define the Navbar functional component
const Navbar = () => {
    // useState to handle the mobile navigation toggle
    const [isNavActive, setNavActive] = useState(false);

    // Function to toggle the navigation menu's visibility
    const handleClick = () => {
        setNavActive(!isNavActive);
    };

    return (
        <nav>
            {/* Navigation logo section */}
            <div className="nav__logo">
                <a href="/">
                    StayHealthy
                    {/* SVG icon for the logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
                        <title>Doctor With Stethoscope SVG icon</title>
                        <g>
                            <g>
                                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...."></path>
                            </g>
                        </g>
                    </svg>
                </a>
                <span>.</span>
            </div>

            {/* Hamburger menu icon, triggers handleClick on click */}
            <div className="nav__icon" onClick={handleClick}>
                {/* Dynamically change icon based on isNavActive state */}
                <i className={isNavActive ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            {/* Navigation links list */}
            {/* Dynamically apply 'active' class based on isNavActive state */}
            <ul className={isNavActive ? "nav__links active" : "nav__links"}>
                <li className="link">
                    <a href="../Landing_Page/LandingPage.html">Home</a>
                </li>
                <li className="link">
                    <a href="#">Appointments</a>
                </li>
                <li className="link">
                    <a href="../Sign_Up/Sign_Up.html">
                        <button className="btn1">Sign Up</button>
                    </a>
                </li>
                <li className="link">
                    <a href="../Login/Login.html">
                        <button className="btn1">Login</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

// Export the component for use in other files
export default Navbar;