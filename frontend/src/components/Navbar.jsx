import { Link } from "react-router-dom";
// import '../App.css';
import LogoBrand from "../images/logo1.png";
import React, { useState } from "react";
import HeadBg from "./HeadBg";

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

    const changeNavbarColor = () => {
      if (window.scrollY >= 400) {
          setColorChange(true);
      }
      else {
          setColorChange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const closeMobileMenu = () => {
    const navbarNav = document.getElementById('navbarSupportedContent');
    if (navbarNav && navbarNav.classList.contains('show')) {
      navbarNav.classList.remove('show');
    }
  }
  

  return (
    <div>
      <nav className={colorChange ? "navbar colorChange fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg"} data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={LogoBrand} height={"80px"} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 opacity-100">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={closeMobileMenu}
                  style={{color: "white"}}
                >
                  Home 
                </Link>
                
              </li>
              <li className="nav-item">
                 <Link
                 className="nav-link" 
                 aria-current="page"
                 to="/about"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/services"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  Services
                </Link>
              </li>
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/pricing"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/sebicircular"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  Sebi Cricular
                </Link>
              </li>
                
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/contactus"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      <HeadBg/>
    </div>
  );
}
