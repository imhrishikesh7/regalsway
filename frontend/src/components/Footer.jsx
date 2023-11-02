import Logo from "../images/logoBrand.png"
import React from "react";

export default function Footer() {
    let footerStyle1={
        width: "150px",
        height: "150px"
    }
    let footerStyle2={
        backgroundColor: "black"
    }
    
        const d = new Date();
        let currentYear = d.getFullYear();
    
  return (
    <div>
      <div className=" mt-5">
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  className="rounded-circle bg-dark  d-flex align-items-center justify-content-center mb-4 mx-0"
                  style={footerStyle1}
                >
                  <img
                    src={Logo}
                    height="150"
                    alt=""
                    loading="lazy"
                  />
                </div>


                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Services</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>API Bridge
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Algo Trading
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Auto Buy and Sell Signals
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Strategy Deployment
                    </a>
                  </li>
                
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Menu</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Pricing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Payment
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt pe-2"></i>Research Elite office, 
                      Vijay nagar, Indore
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone pe-2"></i>+ 91 XXXXX XXXXX 
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0"></i>
                      info@eesearchelite.co.in
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="text-center p-3"
            style={footerStyle2}
          >
            © {currentYear} Copyright: 
            <a className="text-white" href=" https://researchrlite.co.in/">
              researchrlite.co.in
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
