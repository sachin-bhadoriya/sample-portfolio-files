import React, { useState } from "react";
import "./CssFile/NavbarOne.css";
import menuOne from '../../../assets/image/menuOne.png';

const NavbarOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="navContainer pt-3">
      <div className="container">
        <div className="displayFlex navSubContainer">
          <div className="logo">
            <ul className="displayFlex items miniItems">
              <li className="listItem marcellus miniItemsIcon">User</li>
              <li className="listItem marcellus miniItemsIcon">Name</li>
            </ul>
          </div>

          {/* ✅ Desktop Nav */}
          <ul className="desktopLinks displayFlex">
            <li className="listItem marcellus miniItems" onClick={() => scrollToSection('home')}>Home</li>
            <li className="listItem marcellus miniItems" onClick={() => scrollToSection('about')}>About</li>
            <li className="listItem marcellus miniItems" onClick={() => scrollToSection('projects')}>Projects</li>
          </ul>

          <div className="contactPage listItem miniItems">
            <button className="navBtn openSans">CONTACT</button>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="linksMenu" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOne} alt="Menu" />
          </div>
        </div>

        {/* ✅ Mobile Drawer */}
        <div className={`mobileDrawer ${menuOpen ? 'open' : ''}`}>
          <ul className="mobileDrawerItems">
            <li className="listItem marcellus miniItems" onClick={() => scrollToSection('home')}>Home</li>
            <li className="listItem marcellus miniItems" onClick={() => scrollToSection('about')}>About</li>
            <li className="listItem marcellus miniItems" onClick={() => scrollToSection('projects')}>Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
