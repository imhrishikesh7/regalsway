import React from "react";
import QRCode from "../images/demo-qr.jpg";
import user from "../images/user.png"
import Services from "./Services";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import Projects from "./Projects";

export default function Home() {
  let btnStyle = {
    rotate: "-90deg",
    // position: "absolute",
    marginLeft: "0",
    position: "fixed",
    // position: "absolute",
    top: "300px",
    left: "-45px",
    zIndex: "99",
    whiteSpace: "nowrap",
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-success my-0 fixed-left "
        style={btnStyle}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Quick Payment
      </button>

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
              <img className="img-fluid " src={QRCode} alt="" srcset="" />
            </div>

          </div>
        </div>
      </div>
      <Services/>
      <Projects/>
      <div className="container">
      <h1 className="display-6 container mt-5">Testimonials</h1>

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
            Regalsway let us develop, test and implement systematic strategies for trading so that we can quickly identify market dislocations.We are satisfied with the solution and service.
            </p>
          </div>
        </div>

        <div>
          <img src={user} alt="" />
          <div className="myCarousel">
            <h3>Vinay Sharma</h3>
            <h4>Satisfied User</h4>
            <p>
            We thank Regalsway for the wonderful job in helping us develop our trading strategy. Everyone was professional, excellent and hard working. We look forward to continue working.
            </p>
          </div>
        </div>

        <div>
          <img src={user} alt="" />
          <div className="myCarousel">
            <h3>Neha vashishth</h3>
            <h4>Satisfied User</h4>
            <p>
            I am really thankful to Regalsway. With the help of their software, I am able to earn profit in the stock market.
            </p>
          </div>
        </div>
      </Carousel>
      </div>
    </>
  );
}