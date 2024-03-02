import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const submenuRef1 = useRef(null);
  const submenuRef2 = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (submenuRef1.current && !submenuRef1.current.contains(event.target)) &&
        (submenuRef2.current && !submenuRef2.current.contains(event.target))
      ) {
        setMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
  
    window.addEventListener("click", handleClickOutside);
  
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [submenuRef1, submenuRef2]);
  

  return (
    <nav>
     
      <Link to="/" className="title">
        Mythiverse
      </Link>
      
      <ul className={menuOpen ? "open" : ""}>
        
        <li>
          <div ref={submenuRef1}
            style={activeSubmenu === "guides" ? { backgroundColor: "black" } : {}}
            className={`dropDownNavbarOptions ${open ? "active" : ""} ${activeSubmenu === "guides" ? "open" : ""}`}
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
          <div ref={submenuRef2}
            style={activeSubmenu === "menu" ? { backgroundColor: "black" } : {}}
            className={`dropDownNavbarOptions ${open ? 'active' : ''} ${activeSubmenu === "menu" ? "open" : ""}`}
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
        <div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
      </ul>
    </nav>
  );
};
