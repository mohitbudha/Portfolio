import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://my-portfolio-backend-1-db8u.onrender.com/api/messages", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error sending message!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
    </form>
  );
};

export default Contact;
