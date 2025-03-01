import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        
        <img src="./logo.png" alt="logo" className="logo" />

        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        
        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <a onClick={() => handleScroll("Home")}>Home</a>
          <a onClick={() => handleScroll("about")}>About</a>
          <a onClick={() => handleScroll("testimonial")}>Testimonials</a>
          <a onClick={() => handleScroll("contact")}>Contact</a>
          
          
          <div className="button menu-button">Book Now</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
