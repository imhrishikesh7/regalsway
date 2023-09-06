import React from "react";
import ContactUsBg from "../images/contactUsBg.jpg"
export default function ContactUs() {
    let contactUsBgStyle ={
        backgroundImage: `linear-gradient(45deg, rgba(245,70,66, 0.75), rgba(8,83,156, 0.75)), url(${ContactUsBg})`,
        backgroundRepeat: "no-repeat",
        height: "80%",
        backgroundSize: "cover"
    }
  return (
    <>
    <h1 className="display-6 container mt-5">Get In Touch With US</h1>
    <div className=" container container-fluid text-light py-3 mb-5" style={contactUsBgStyle}>
      <div  className="container my-5" >
        <div  className="row justify-content-center">
          <div  className="col-lg-9 ">
            <form action="https://formsubmit.co/094e5fc8b3644e2686d112669478b497" method="POST">
              
              <input type="text" name="_honey" style={{display:"none"}} />
              <input type="hidden" name="_captcha" value={"false"} />
              
              <div  className="row g-3">
                <div  className="col-md-6">
                  <label  htmlFor="your-name"  className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                     className="form-control"
                    id="your-name"
                    name="First&nbsp;Name"
                    required
                  />
                </div>
                <div  className="col-md-6"> 
                  <label  htmlFor="your-surname"  className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                     className="form-control"
                    id="your-surname"
                    name="Last&nbsp;Name"
                    required
                  />
                </div>
                <div  className="col-md-6">
                  <label  htmlFor="your-email"  className="form-label">
                    Email ID
                  </label>
                  <input
                    type="email"
                     className="form-control"
                    id="your-email"
                    name="Email&nbsp;ID"
                    required
                  />
                </div>
                <div  className="col-md-6">
                  <label  htmlFor="your-subject"  className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                     className="form-control"
                    id="your-subject"
                    name="Subject"
                  />
                </div>
                <div  className="col-12">
                  <label  htmlFor="your-message"  className="form-label">
                    Message
                  </label>
                  <textarea
                     className="form-control"
                    id="your-message"
                    name="Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div  className="col-12">
                  <div  className="row">
                    <div  className="col-md-6">
                      <button
                        data-res="<?php echo $sum; ?>"
                        type="submit"
                         className="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
