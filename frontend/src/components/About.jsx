import MainImg from "../images/main-img.png";
import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="container mt-5 main d-flex flex-column-reverse flex-md-row">
        <div>
          <p className="display-6">About Regalsway Algo Software</p>
          <h4>Expert advice to invest capital with Algo platform</h4>
          <p style={{ textAlign: "justify" }}>
            If a dealer trades after the crucial time gap, the stock price might
            be rising, and they could miss a trading opportunity. Therefore, you
            are unable to form accurate views using this type of trading advice
            service provided by the Panel. We StechSolutionIT is an auto robot
            trading outstation in India, and it is based on automated
            programmed software. With our accurate analysis and years of
            experience, we provide effective results in the Stock Market, Equity
            and Commodity Trading, Nifty and Bank Nifty Future, Stock and Index
            Future, Bullion, and MCX. These factors set us apart from other
            financial result companies in India.
          </p>
        </div>
        <div className="img-container">
          <img className="img-fluid" src={MainImg} alt="" />
        </div>
      </div>
      <div className="container d-flex flex-column flex-md-row">
        <section className="border p-3 mx-2 rounded">
          <h2>MISSION</h2>
          <p>
            OUR MISSION IS TO LEVERAGE OUR EXPERTISE IN IT AND ALGORITHMS TO
            DEVELOP ROBUST AND SCALABLE SOFTWARE SOLUTIONS TAILORED TO THE
            UNIQUE NEEDS OF EACH CLIENT. WE STRIVE TO EXCEED CUSTOMER
            EXPECTATIONS BY DELIVERING SUPERIOR PRODUCTS THAT ARE INTUITIVE,
            SECURE, AND EFFICIENT.
          </p>
        </section>
        <section className="border p-3 mx-2 rounded">
          <h2>VISION</h2>
          <p>
            WE BELIEVE IN MAKING LONG TERM RELATIONSHIPS WITH OUR CLIENTS. WITH
            POTENTIAL SUPPORT. WE ENVISION A FUTURE WHERE TECHNOLOGY SEAMLESSLY
            INTEGRATES WITH EVERY ASPECT OF OUR CLIENTS' OPERATIONS, OPTIMIZING
            THEIR PROCESSES, DRIVING INNOVATION, AND DELIVERING EXCEPTIONAL
            VALUE TO OUR CUSTOMERS.
          </p>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .img-container {
            display: none; /* Hide the image for smaller screens */
          }
        }
      `}</style>
    </div>
  );
}
