import { Link } from "react-router-dom";
import '../App.css';
import LogoBrand from "../images/logo2.png";
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

    const handleLoginClick = () => {
      window.open("https://client.researchelite.in", "_blank"); // Opens the URL in a new tab
    };

  const closeMobileMenu = () => {
    const navbarNav = document.getElementById('navbarSupportedContent');
    if (navbarNav && navbarNav.classList.contains('show')) {
      navbarNav.classList.remove('show');
    }
  }
  

  return (
    <div>
      <nav className={colorChange ? "navbar colorChange fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg"} data-bs-theme="dark">
        <div className="navbar2">
        <div className="container-fluid justify-content-center">
        <a className="navbar-brand " href="/">
            <img src={LogoBrand} height={"100px"} alt="" />
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
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <div className="container">
            <ul className="navbar-nav text-center ul mb-2 mb-lg-0 fs-6 opacity-100">
              <li className="nav-item hov mx-2">
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
              <li className="nav-item hov mx-2">
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
              <li className="nav-item hov dropdown mx-2">
              <button className="btn dropdown-toggle fs-6" data-bs-toggle="dropdown" style={{color: "white", padding: "8px"}} aria-expanded="false">
                Services
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                <Link
                 className="nav-link dropdown-item"
                 aria-current="page"
                 to="/services"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  IT Services
                </Link>
                </li>
                <li>
                <Link
                 className="nav-link dropdown-item"
                 aria-current="page"
                 to="/services"
                 onClick={closeMobileMenu}
                 style={{color: "white"}}
                 >
                  Algo Services
                </Link>
                </li>
              </ul>
              </li>
              <li className="nav-item hov mx-2">
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
              <li className="nav-item hov mx-2">
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
                
              <li className="nav-item hov mx-2">
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
              <li className="nav-item mx-2">
              
                  <button type="button" class="btn btn-success" onClick={handleLoginClick}>Log In</button>
                
              </li>
            </ul>
          </div>
          </div>
        <hr className="Brnav"/>

        </div>
        </div>
      </nav>
      <HeadBg/>
         
    </div>
  );
}
