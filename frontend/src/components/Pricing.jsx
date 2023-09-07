import React from "react";
import Card from "./Card";
import "../styles/Pricing.scss";
import axios from "axios";
export default function Pricing() {
  const checkoutHandler = async (amount) => {
    const { data:{key} } = await axios.get("http://localhost:4000/api/getKey")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

    const { data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
    amount
    })
        .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });


    const options = {
      key, 
      amount: order.amount, 
      currency: "INR",
      name: "RegalSway",
      description: "Test Transaction",
      image: "../images/second.png",
      order_id: order.id, 
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3b3b3b",
      },
    };
    const razor = new window.Razorpay(options);
      razor.open();
      // e.preventDefault();
    }

  return (
    <div className="container">
      <h1 className="display-6 container mt-5">Our Plans</h1>
      <div className="box hstack">
        <Card
          title="BASIC"
          amount={10000}
          theme="green"
          checkoutHandler={checkoutHandler}
          items={["Monthly Plan", "Valid For A Month"]}
        />
        <Card
          title="SILVER"
          amount={25000}
          theme="blue"
          checkoutHandler={checkoutHandler}
          items={["Quarterly Plan", "Valid For 3 Months"]}
        />
        <Card
          title="GOLD"
          amount={45000}
          theme="gold"
          checkoutHandler={checkoutHandler}
          items={["Half Yearly Plan", "Valid For 6 Months"]}
        />
        <Card
          title="PLATINUM"
          amount={80000}
          checkoutHandler={checkoutHandler}
          items={["Yearly Plan", "Valid For 12 Months"]}
        />
      </div>
    </div>
  );
}
