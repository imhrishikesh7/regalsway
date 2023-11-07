import React from "react";
import '../App.css';
export default function ContactUs() {
    
  return (
    <>
    <h1 className="text-center container mt-5">Contact Us</h1>
    <div className=" container container-fluid contact-form-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 contact-form-container" >
            <h2 className="section-summary">Need information? Fill out the form and send us a message.</h2>
            <form
              id="cont"
              action="https://formsubmit.co/info@researchelite.co.in" 
              method="POST"
              className="contact-form"
            >
              <input type="hidden" name="_token" value="pjNV4AekjPIapATWnA8avOMkpAQe20N1u7tIuB6B" />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-element">
                    <input name="name" type="text" placeholder="Name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-element">
                    <input name="phone" type="text" placeholder="Mobile Number" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-element">
                    <input name="email" type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-element">
                    <input name="subject" type="text" placeholder="Subject" required />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-element">
                    <textarea
                      name="message"
                      id="comment"
                      cols="20"
                      rows="7"
                      placeholder="Comment"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-element no-margin">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 map-container">
            <div className="map-wrapper">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924712367!2d75.7237618214095!3d22.724228429904368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1667394615671!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="pop fs-8">
              <div className="single-contact-info">
                <div className="icon-wrapper">
                <img width="20" height="20" src="https://img.icons8.com/sf-ultralight-filled/25/FFFFFF/visit.png" alt="visit"/>
                </div>
                <p>Indore, Madhya Pradesh</p>
              </div>
              <div className="single-contact-info">
                <div className="icon-wrapper">
                <img width="15" height="15" src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" alt="phone"/>
                </div>
                <p><a href="tel:+91 8959001774">+91 8959001774</a></p>
              </div>

              <div className="single-contact-info">
                <div className="icon-wrapper">
                <img width="15" height="15" src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" alt="new-post"/>
                </div>
                <p>info@researchelite.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
    </> 
  
  );
}
