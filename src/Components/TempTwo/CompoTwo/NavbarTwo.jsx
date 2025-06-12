import { useState } from "react";
import { Link } from "react-router-dom";
import "./CssFile/NavbarTwo.css";
import menuOne from "../../../assets/image/menuOne.png";

const NavbarTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container changa">
      <div className="navTwoContainer">
        <div className="logo">
          <span>UserName</span>
        </div>

        {/* Desktop Menu */}
        <div className="linksMain desktopOnly">
          <ul>
            <li><Link to="/Second/">Home</Link></li>
            <li><Link to="/Second/about">About</Link></li>
            <li><Link to="/Second/skills">Skills</Link></li>
            <li><Link to="/Second/service">Service</Link></li>
            <li><Link to="/Second/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="CvDownBtn desktopOnly">
          <div className="CvBtn">
            <button>Download CV</button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="linksMenu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOne} alt="menu" />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobileDrawerTwo ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/Second/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Second/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/Second/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/Second/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
          <li><Link to="/Second/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTwo;
