import { Link } from "react-router-dom";
// import '../App.css';

import LogoBrand from "../images/logoBrand.png";
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
  return (
    <div>
      <nav className={colorChange ? "navbar colorChange fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg"}  data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={LogoBrand} height={"50px"} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                >
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
                 <Link
                 className="nav-link"
                 aria-current="page"
                 to="/about"
                 >
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/services"
                 >
                  Services
                </Link>
              </li>
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/pricing"
                 >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/sebicircular"
                 >
                  Sebi Cricular
                </Link>
              </li>
                
              <li className="nav-item">
              <Link
                 className="nav-link"
                 aria-current="page"
                 to="/contactus"
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
