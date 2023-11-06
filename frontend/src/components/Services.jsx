import First from "../images/first.png";
import Second from "../images/second.png";
import Third from "../images/third.png";
import Forth from "../images/forth.png";
import React from "react";

export default function Services({ showAlgoServices }) {
  let algoServicesStyle = {
    height: "50vh",
    width: "auto", // Change from "0vw" to "auto"
    objectFit: "cover",
  };

  return (
    <>
      <div className="container container-fluid my-5">
        <h1 className="text-center">Services</h1>
        <div className="container text-center">
          <div className="row mt-5">
            <div className="col">
              <h4>API BRIDGE</h4>
              <img
                className="img-fluid"
                style={algoServicesStyle}
                src={First}
                alt=""
                srcSet=""
              />
              <p className="my-4" style={{ textAlign: "justify" }}>
                API Bridge is a set of programming interface, pincode, and Places
                is first programming interface right now. API Bridge permits you
                to algo trade with various stages like Amibroker, MT4, TradingView,
                Python, Excel, NinjaTrader, and so on.
              </p>
            </div>
            <div className="col">
              <h4>ALGO TRADING</h4>
              <img
                className="img-fluid"
                style={algoServicesStyle}
                src={Second}
                alt=""
                srcSet=""
              />
              <p className="my-4" style={{ textAlign: "justify" }}>
                Algo Trading is a type of automated trading that utilizes PC
                programs to examine market data dependent on pre-characterized
                parameters. It places trades on the terminal and submits to
                exchange directly, thereby reducing human or manual invention.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h4>AUTO BUY AND SELL SIGNALS</h4>
              <img
                className="img-fluid"
                style={algoServicesStyle}
                src={Third}
                alt=""
                srcSet=""
              />
              <p className="my-4" style={{ textAlign: "justify" }}>
                You could know precisely when to purchase, hold or sell stocks
                or commodities. Auto Buy Sell signal programming software is an
                interesting and extraordinary tool for the brokers, investors,
                and examiners in Financial markets.
              </p>
            </div>
            <div className="col">
              <h4>STRATEGY DEVELOPMENT</h4>
              <img
                className="img-fluid"
                style={algoServicesStyle}
                src={Forth}
                alt=""
                srcSet=""
              />
              <p className="my-4" style={{ textAlign: "justify" }}>
                MT4 and MT5 indicators, master advisors, calculators, and even
                money management formulas are the main Trading tools. Most of
                these tools are special indicators. These tools have one main
                objective, to assist brokers with estimating future value
                changes. We at Richway with a group of expert MT4/MT5 software
                engineers to build up your trading strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
