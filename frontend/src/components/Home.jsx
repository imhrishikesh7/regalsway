import React from "react";
import QRCode from "../images/qrcode.png";
import ISOCertificate from "../images/iso-certificate.jpg";
import user from "../images/user.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import Projects from "./Projects";

export default function Home() {  
  return (
    <>

      <button
        type="button"
        className="btn my-0 fixed-left rotated-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Quick Payment
      </button>
      <button
        type="button"
        className="btn my-0 fixed-left rotated-btn2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        ISO Certificate
      </button>
      
      <div className="container Banner-summery">
        <h4>RESEARCH ELITE</h4> 
        <h1>Automated share trading platform.</h1>
        <p>Researchelite is always better than manual trading. Researchelite is fully automatic trading without any manual intervention. Our web-based Researchelite terminal<br/> works with the leading brokers of India who those are providing facilities of API based trading.</p>
      </div>

      <div
        className="modal modal-sm fade h-60"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Quick Payment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  p-2">
              <img className="img-fluid " src={QRCode} alt="" srcSet="" />
              <div className="container-fluid my-2">
                <p className="align-middle border border-secondary bg-light rounded p-2"><b>Account No:</b> 1987070720232727</p>
                <p className="align-middle border border-secondary bg-light rounded p-2"><b>IFSC Code:</b> AUBL0002537</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="modal modal-lg fade h-60"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
                ISO Certificate
            </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  p-2">
              <img className="img-fluid " src={ISOCertificate} style={{width: ""}} alt="" srcSet="" />
            </div>
          </div>
        </div>
      </div>
      
      <Projects/>
      <div className="container">
        <h1 className=" text-center container mt-5">Testimonials</h1>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Shreyas Mehta</h3>
              <h4>Satisfied User</h4>
              <p>
                Research Elite let us develop, test and implement systematic strategies for trading so that we can quickly identify market dislocations.We are satisfied with the solution and service.
              </p>
            </div>
          </div>

          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Vinay Sharma</h3>
              <h4>Satisfied User</h4>
              <p>
                We thank Research Elite for the wonderful job in helping us develop our trading strategy. Everyone was professional, excellent and hard working. We look forward to continue working.
              </p>
            </div>
          </div>

          <div>
            <img src={user} alt="" />
            <div className="myCarousel">
              <h3>Neha vashishth</h3>
              <h4>Satisfied User</h4>
              <p>
                I am really thankful to Research Elite. With the help of their software, I am able to earn profit in the stock market.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
