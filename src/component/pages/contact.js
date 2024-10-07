import React, { useState } from 'react'

const  Contact=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for contacting us!');
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert('Please fill out all fields.');
    }
  };
  return (
    <div className="contact-form-container">
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name..."
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email..."
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write something..."
        style={{ height: "200px" }}
        required
      />

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Contact;