// src/components/InquiryForm.js
import React, { useState } from "react";
import "./CustomerInquiryForm.css";
function CustomerInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // So users can input malicious scripts since no data validation
    console.log("Submitted inquiry:", { name, email, message });

    if (message != null) {
      alert("Submitted the inquiry");
      window.location.href = "/Success";
    }

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1>Customer Inquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" required value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomerInquiryForm;
