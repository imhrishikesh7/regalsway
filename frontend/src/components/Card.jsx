import React from "react";
import "../styles/Pricing.scss";

export default function Card({ title, theme, amount, items, checkoutHandler }) {
  return (
    <div>
      <div className="container ">
        <div className="row my-5 ">
          <div className="col-md-3 col-sm-6">
            <div className={`pricingTable ${theme}`}>
              <div className="pricingTable-header">
                <h3 className="title">{title}</h3>
                <div className="price-value">
                  <span className="amount">&#8377;{amount}</span>
                </div>
              </div>
              <ul className="pricing-content">
                {items.map((list)=>
                    <li>{list}</li>
                )}
              </ul>

              <div className="pricingTable-signup">
                <button href="/" onClick={()=>checkoutHandler(amount)}>Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
