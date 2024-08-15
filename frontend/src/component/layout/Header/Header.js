// import React from "react";
// import  {ReactNavbar}  from "overlay-navbar";
// import logo from "../../../images/logo.png";
// const options = {
//   burgerColorHover: "#eb4034",
// logo,
// logoWidth: "20vmax",
// navColor1: "white",
// logoHoverSize: "10px",
// logoHoverColor: "#eb4034",
// link1Text: "Home",
// link2Text: "Products",
// link3Text: "Contact",
// link4Text: "About",
// link1Url: "/",
// link2Url: "/products",
// link3Url: "/contact",
// link4Url: "/about",
// link1Size: "1.3vmax",
// link1Color: "rgba(35, 35, 35,0.8)",
// nav1justifyContent: "flex-end",
// nav2justifyContent: "flex-end",
// nav3justifyContent: "flex-start",
// nav4justifyContent: "flex-start",
// link1ColorHover: "#eb4034",
// link1Margin: "1vmax",
// // profileIcon: true, // Ensure this is enabled
// // searchIcon: true,  // Ensure this is enabled
// // cartIcon: true,    // Ensure this is enabled
// profileIconUrl: "/login",
// profileIconColor: "rgba(34, 31, 15,0.8)",
// searchIconColor: "rgba(35, 35, 35,0.8)",
// cartIconColor: "rgba(35, 35, 35,0.8)",
// profileIconColorHover: "#eb4034",
// searchIconColorHover: "#eb4034",
// cartIconColorHover: "#eb4034",
// cartIconMargin: "1vmax",
// };
// const Header = () => {
//   return <ReactNavbar {...options} />;
// };
// export default Header;

// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'; // Adjust the path as necessary
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/search" onClick={toggleMenu}>Search</Link></li>
        <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li>
        <li><Link to="/login" onClick={toggleMenu}>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
