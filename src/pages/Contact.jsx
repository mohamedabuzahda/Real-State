<<<<<<< HEAD
import React, { useState } from "react";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const nameRegex = /^[A-Z\sa-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    const phoneRegex = /^(01)[0-9]{9}$/;
    const messageRegex = /^\s*(\S+)\s*/;

    if (
      nameRegex.test(name) &&
      emailRegex.test(email) &&
      (phone === "" || phoneRegex.test(phone)) &&
      messageRegex.test(message)
    ) {
      console.log("We Will Contact you");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Thank you! We will be in touch shortly.");
    } else {
      alert("Please check your data and try again.");
    }
  };

  return (
    <div>
      <div className="header1"></div>
      <div className="header2">
        <h1>Contact</h1>
      </div>
      <div className="text1">
        <h1>Arrange A Private Consultation</h1>
      </div>
      <hr className="hr1" />
      <div className="text2">
        <h1>
          For a confidential discussion about your next development, please
          contact inquiry@sprec.com
        </h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} id="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="button-container">
            <button type="submit">CONTACT US</button>
          </div>
        </form>
      </div>
      <hr className="hr2" />
    </div>
  );
};

export default Contact;
=======
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </div>
  )
}

export default Contact
>>>>>>> a6c2a35c224a0b515445a8c1acea1b16485acd8e
