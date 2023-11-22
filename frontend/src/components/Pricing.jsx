import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Pricing.css";

const Pricing = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  
  const checkoutHandler = (amount) => {
    setSelectedAmount(amount);
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.contact || !userData.remark || !selectedAmount) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const { data: { key } } = await axios.get("http://localhost:4000/api/payment/getKey");
      const { data: { order } } = await axios.post("http://localhost:4000/api/payment/checkout", {
        amount: selectedAmount,
        user: userData,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Researchelite",
        description: "Test Transaction",
        image: "../images/second.png",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/payment/paymentverification",
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.contact,
        },
        notes: {
          address: "Razorpay Corporate Office",
          user_details: JSON.stringify(userData),
        },
        theme: {
          color: "#3b3b3b",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

      // After handling Razorpay, proceed with FormSubmit
      const form = e.target;
      const formData = new FormData(form);

      await axios.post(form.action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    } catch (error) {
      console.error("Error during checkout:", error);
    }

    setShowForm(false);
  };

  return (
    <div className="container">
      {!showForm && (
        <>
          <h1 className="text-center container mt-5">Our Plans</h1>
          <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4 col-lg-4">
              {/* Render Card component with appropriate props */}
              <Card
                title="MONTHLY PACKAGE"
                subtitle="Monthly"
                amount={13000}
                checkoutHandler={() => checkoutHandler(13000)}
                items={[
                  "Completely Automated",
                  "Trades Indices",
                  "WhatsApp Support",
                  "Remote Support",
                  "1 Strategy (1/Month)",
                ]}
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              {/* Render Card component with appropriate props */}
              <Card
                title="QUARTERLY PACKAGE"
                subtitle="Quarterly"
                amount={27000}
                checkoutHandler={() => checkoutHandler(27000)}
                items={[
                  "Completely Automated",
                  "Trades Indices",
                  "WhatsApp Support",
                  "Remote Support",
                  "3 Strategy (1/Month)",
                ]}
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              {/* Render Card component with appropriate props */}
              <Card
                title="HALF YEARLY PACKAGE"
                subtitle="Half Yearly"
                amount={45000}
                checkoutHandler={() => checkoutHandler(45000)}
                items={[
                  "Completely Automated",
                  "Trades Indices",
                  "WhatsApp Support",
                  "Remote Support",
                  "6 Strategy (1/Month)",
                ]}
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              {/* Render Card component with appropriate props */}
              <Card
                title="YEARLY PACKAGE"
                subtitle="Yearly"
                amount={88000}
                checkoutHandler={() => checkoutHandler(88000)}
                items={[
                  "Completely Automated",
                  "Trades Indices",
                  "WhatsApp Support",
                  "Remote Support",
                  "12 Strategy (1/Month)",
                ]}
              />
            </div>          
          </div>
        </>
      )}
      {showForm && (
        <div className="pricing-form">
          <h1 className="text-center my-5">Checkout Form</h1>
          <Form onSubmit={handleFormSubmit} >
            <Form.Group controlId="amount" className="mb-3">
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={`${selectedAmount}`}
                onChange={handleChange}
                readOnly
                disabled
              />
              <p>*18% GST and 2% transaction fee included</p>
            </Form.Group>

            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name Surname"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Your E-mail:</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="contact" className="mb-3">
              <Form.Label>Your Mobile Number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="XXX XXX XXXX"
                name="contact"
                value={userData.contact}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="remark" className="mb-3">
              <Form.Label>Add Remark:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Remark"
                name="remark"
                value={userData.remark}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="success" className="mt-3">
              CHECKOUT
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Pricing;
