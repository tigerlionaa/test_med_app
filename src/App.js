// Import necessary modules from React and react-router-dom
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import the Navbar component and the main App CSS file
import Navbar from './Components/Navbar/Navbar';
import './App.css';

// The main App functional component
function App() {
  return (
    <>
      {/* BrowserRouter handles the routing for the application */}
      <BrowserRouter>
        {/* The Navbar component is rendered on every page */}
        <Navbar />
        {/* The Routes component defines the different routes of the application */}
        <Routes>
          {/* Define individual Route components for different pages here.
              For example: <Route path="/" element={<HomePage />} /> 
          */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Export the App component to be used in index.js
export default App;