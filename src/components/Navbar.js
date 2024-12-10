

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

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
            <Link to="/login" className="navbar-link" onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <Link to="/login" className="navbar-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;






