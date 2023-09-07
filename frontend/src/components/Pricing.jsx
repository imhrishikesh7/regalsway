import React, { useState } from "react";
import Card from "./Card";
import { Modal, Button } from "react-bootstrap";
import "../styles/Pricing.scss";
import axios from "axios";

export default function Pricing() {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkoutHandler = async (amount) => {
    setShowForm(true); 
    setSelectedAmount(amount);  
  }

    const closeModal = () => {
      setShowForm(false);
    };

    const handleFormSubmit = async () => {
      try{ 
        const { data:{key} } = await axios.get("http://localhost:4000/api/getKey")
        
        const { data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
          amount: selectedAmount,
        })
        
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
            name: userData.name,
            email: userData.email,
            contact: userData.contact,
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
         }catch (error) {
          console.error("Error during checkout:", error);
          // You can handle errors here, such as displaying an error message to the user.
        }
        closeModal()
    }


  return (
    <div className="container">
    <h1 className="display-6 container mt-5">Our Plans</h1>
    <div className="box hstack">
      <Card
        title="BASIC"
        amount={10000}
        theme="green"
        checkoutHandler={() => checkoutHandler(10000)}
        items={["Monthly Plan", "Valid For A Month"]}
      />
      <Card
        title="SILVER"
        amount={25000}
        theme="blue"
        checkoutHandler={() => checkoutHandler(25000)}
        items={["Quarterly Plan", "Valid For 3 Months"]}
      />
      <Card
        title="GOLDEN"
        amount={45000}
        theme="gold"
        checkoutHandler={() => checkoutHandler(45000)}
        items={["Half Yearly Plan", "Valid For 6 Months"]}
      />
      <Card
        title="PLATINUM"
        amount={80000}
        checkoutHandler={() => checkoutHandler(80000)}
        items={["Yearly Plan", "Valid For An Year"]}
      />
      
    </div>

    <Modal show={showForm} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Your Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          {/* Form fields here */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={userData.contact}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);
}
