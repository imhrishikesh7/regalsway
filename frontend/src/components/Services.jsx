import First from "../images/first.png";
import Second from "../images/second.png";
import Third from "../images/third.png";
import Forth from "../images/forth.png";
import React from "react";
export default function Services() {
  let algoServicesStyle = {
    height: "50vh",
    width: "40vw",
    objectFit: "cover",
  };
  return (
    <>
      <div className="container container-fluid my-5">
        <p className="display-6">Services</p>
        <div className="container text-center">
          <div className="row mt-5">
            <div className="col">
              <h6>API BRIDGE</h6>
              <p style={{ textAlign: "justify" }}>
                API Bridge is a set of programming interface, pincode and Places
                is first programming interface right now. APIBridge permits you
                to algo trade with various stages like Amibroker, MT4,
                TradingView, Python, Excel, NinjaTrader and so on.
              </p>
            </div>
            <div className="col">
              <h6>ALGO TRADING</h6>
              <p style={{ textAlign: "justify" }}>
                Algo Trading is a type of automated trading that utilizes PC
                programs to examine market data dependent on pre-characterized
                parameters. It places trades on the terminal and submits to
                exchange directly thereby reducing human or manual invention.
              </p>
            </div>
            <div className="col">
              <h6>AUTO BUY AND SELL SIGNALS</h6>
              <p style={{ textAlign: "justify" }}>
                You could know precisely when to purchase, hold or sell stocks
                or commodities. Auto Buy Sell signal programming software is an
                interesting and extraordinary tool for the brokers, investors
                and examiners in Financial markets.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h6>STRATEGY DEVELOPMENT</h6>
              <p style={{ textAlign: "justify" }}>
                MT4 and MT5 indicators, master advisors, calculators, and even
                money management formulas are the main Trading tools. Most of
                these tools are special indicators. These tools have one main
                objective, to assist brokers with estimating future value
                changes. We at Richway with a group of expert MT4/MT5 software
                engineers to build up your trading strategy
              </p>
            </div>
            <div className="col">
              <h6>SOFTWARE DEVELOPMENT SERVICES</h6>
              <p style={{ textAlign: "justify" }}>
                Today’s world is all about “Innovation or persuasion” and the
                same is applicable across industries, including IT sector.
              </p>
            </div>
            <div className="col">
              <h6>WORDPRESS WEBSITE DESIGNING</h6>
              <p style={{ textAlign: "justify" }}>
                We’re a trusted and results-driven WordPress website design
                company. Managing your website should be simple....
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="display-6 my-4">Algo Services</p>
        <div className="d-flex container">
          <div>
            <img
              className="img-fluid"
              style={algoServicesStyle}
              src={First}
              alt=""
              srcSet=""
            />
            <h4 className="my-3 text-center">API BRIDGE</h4>
            <p>API Bridge is a set of programming interface, pincode and Places is first programming interface right now. APIBridge permits you to algo trade with various stages like Amibroker, MT4, TradingView, Python, Excel, NinjaTrader and so on.</p>
            <img
              className="img-fluid"
              style={algoServicesStyle}
              src={Third}
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              className="img-fluid"
              style={algoServicesStyle}
              src={Second}
              alt=""
              srcSet=""
            />
            <h4 className="my-3 text-center">ALGO TRADING</h4>
            <p>Algo Trading is a type of automated trading that utilizes PC programs to examine market data dependent on pre-characterized parameters. It places trades on the terminal and submits to exchange directly thereby reducing human or manual invention.</p>
            <img
              className="img-fluid"
              style={algoServicesStyle}
              src={Forth}
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
