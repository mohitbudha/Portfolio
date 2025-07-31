import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch("https://my-portfolio-backend-1-db8u.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });
      setStatus("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("❌ Failed to send message.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-white dark:bg-gray-900 px-6 md:px-16 py-16"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        Get in <span className="text-blue-500">Touch</span>
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between gap-36 max-w-6xl mx-auto">
        
        {/* LEFT: Contact Form */}
        <motion.div
          className="w-full md:w-1/2 ml-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Send Me a Message
          </h3>
          {status && <p className="text-green-500 mb-4">{status}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT: Social Links */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center ml-6 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Connect with Me
          </h3>
          <div className="flex flex-col gap-6 text-lg text-gray-700 dark:text-gray-300">
            <a href="tel:+9779812345678" className="flex items-center gap-3 hover:text-blue-500 transition">
              <FaPhoneAlt /> +977 9812345678
            </a>
            <a href="mailto:mohit@example.com" className="flex items-center gap-3 hover:text-blue-500 transition">
              <MdEmail /> mohit@example.com
            </a>
            <a href="https://wa.me/9779812345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-500 transition">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-800 dark:hover:text-gray-100 transition">
              <FaGithub /> GitHub
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition">
              <FaFacebook /> Facebook
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-500 transition">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
