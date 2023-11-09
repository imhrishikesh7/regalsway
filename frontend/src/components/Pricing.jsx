import React, { useState } from "react";
import Card from "./Card";
import { Modal, Button } from "react-bootstrap";
import "../styles/Pricing.css";
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

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Validate the form data
    if (!userData.name || !userData.email || !userData.contact) {
      alert("Please fill in all fields.");
      return; // Do not submit the form if any field is empty
    }
    try {
      const { data: { key } } = await axios.get("http://localhost:4000/api/getKey") //Modify the url wrto the actual server domain.

      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { //Modify the url wrto the actual server domain.
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
        //Modify the url wrto the actual server domain.
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
    } catch (error) {
      console.error("Error during checkout:", error);
      // You can handle errors here, such as displaying an error message to the user.
    }
    closeModal()
  }


  return (
    <div className="container fluid">
      <h1 className="text-center container mt-5">Our Plans</h1>
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-4">
          <Card
            title="MONTHLY PACKAGE"
            subtitle="Monthly"
            amount={13000}
            checkoutHandler={() => checkoutHandler(10000)}
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
          <Card
            title="QUARTERLY PACKAGE"
            subtitle="Quarterly"
            amount={27000}
            checkoutHandler={() => checkoutHandler(25000)}
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
          <Card
            title="YEARLY PACKAGE"
            subtitle="Yearly"
            amount={88000}
            checkoutHandler={() => checkoutHandler(80000)}
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

      <Modal show={showForm} onHide={closeModal}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Enter Your Details</Modal.Title> */} 
          {/* Replace the below title later */}
          <Modal.Title>Researchelite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form>
          
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
                required
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
                required
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
                required
              />
            </div>
          </form> */}
          {/* later delete the heading and p below and uncomment the above form */}
        <h2>Page under construction</h2>
        <p>Contact regalsway pvt. ldt. for more queries through our contact section, sorry for inconvinience, payments section is under construction. Stay tuned for updates.</p>
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
