import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <Link to="/" className="title">
        Mythiverse
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        
        <li>
          <div
            style={activeSubmenu === "guides" ? { backgroundColor: "black" } : {}}
            className={`dropDownNavbarOptions ${activeSubmenu === "guides" ? "open" : ""}`}
            onClick={() => { toggleSubmenu("guides"); }}
          >
            Guides
            <ul className={activeSubmenu === "guides" ? "submenu open2" : "submenu"}>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/greek-mythology">Greek Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/norse-mythology">Norse Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Egyptian-mythology">Egyptian Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Chinese-mythology">Chinese Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Celtic-mythology">Celtic Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Hindu-mythology">Hindu Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Aztec-mythology">Aztec Mythology</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Japanese-mythology">Japanese Mythology</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <div
            style={activeSubmenu === "menu" ? { backgroundColor: "black" } : {}}
            className={`dropDownNavbarOptions ${activeSubmenu === "menu" ? "open" : ""}`}
            onClick={() => { toggleSubmenu("menu"); }}
          >
            Menu
            <ul className={activeSubmenu === "menu" ? "submenu open2" : "submenu"}>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/">Home</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/about">About</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Newsletter">Newsletter</Link></li>
              <li><Link className="submenu-link" style={{ backgroundColor: 'transparent' }} to="/Contact">Contact</Link></li>
              
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
