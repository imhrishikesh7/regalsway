import React from "react";
import "../styles/Pricing.css";

export default function Card({ title, subtitle,  amount, items, checkoutHandler }) {
  return (
    <div>
      <div className="container">
        <div className="row my-5 ">
          <div className="col-md-3 col-sm-6 col-lg-4">
            <div className={"pricingTable"}>
              <div className="pricingTable-header">
                <h3 className="title ">{title}</h3>
                <p className="subtitle">{subtitle}</p>
                <div className="price-value ">
                  <span className="amount display-6">&#8377;{amount}</span>
                </div>
              </div>
              <ul className="pricing-content">
                
                {items.map((list, index)=> 
                  <li key={index}>{list}</li>
                )}

              </ul>

              <div className="pricingTable-signup">
                <button href="/" onClick={()=>checkoutHandler(amount)}>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
