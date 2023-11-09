import Logo from "../images/logo1.png"
import React from "react";
import '../App.css';

export default function Footer() {
    
    let footerStyle2={
        backgroundColor: "black"
    }
    
        const d = new Date();
        let currentYear = d.getFullYear();
    
  return (
    <div>
      <div className=" mt-5">
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="footercontainer container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  className="rounded-circle my-5 bg-dark d-flex align-items-center justify-content-center mb-4 mx-0"
                  
                >
                  <img
                    className=""
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
                      <i className="fas fa-paw pe-3"></i>Strategy Development
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Software Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Wrodpress Website Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Volunteer activities
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-4 my-4">
                            <h4></h4>
                            <ul class="footer-links">
                             <li className="my-2"> <a href="/">Portfolio</a> </li>
                             <li className="my-2"> <a href="/"> Privacy Policy</a></li>
                             <li className="my-2"> <a href="/"> Terms & Conditions</a></li>
                            <li className="my-2"> <a href="/"> Refund Policy</a></li>
                         </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>

                <ul className="list-unstyled">
                  <li className="d-flex">
                  <img width="25" height="25" src="https://img.icons8.com/sf-ultralight-filled/25/FFFFFF/visit.png" alt="visit"/>
                    <p>
                      Research Elite office,
                      Vijay nagar, Indore
                    </p>
                  </li>
                  <li className="d-flex">
                  <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" alt="phone"/>
                    <p>
                      + 91-8959001774 
                    </p>
                  </li>
                  <li className="d-flex">
                  <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" alt="new-post"/>
                    <p>
                       info@researchelite.in
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
            <a className="text-white" href=" https://researchelite.co.in/">
              researchelite.co.in
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
