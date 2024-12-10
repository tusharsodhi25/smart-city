

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import Weather from "./Pages/Weather";
import FamousPlaces from "./Pages/FamousPlaces";
import Map from "./Pages/Map";
import Home from "./Pages/Home";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import "./App.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="navbar">
      <h1>Smart City Dashboard</h1>
      <div className="navbar-links">
        {/* Show only Signup button when on Login page */}
        {location.pathname === "/login" ? (
          <Link to="/signup" className="navbar-link">Signup</Link>
        ) : isLoggedIn ? (
          <>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/famousplaces" className="navbar-link">Places</Link>
            <Link to="/weather" className="navbar-link">Weather</Link>
            <Link to="/map" className="navbar-link">Map</Link>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="navbar-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Signup />} />
          <Route path="/famousplaces" element={<FamousPlaces />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/map" element={<Map />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

