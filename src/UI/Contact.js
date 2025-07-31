import React, { useState } from "react";
import axios from "axios";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await axios.post("https://my-portfolio-backend-1-db8u.onrender.com/api/contact", form);
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeIn" } }
  };

  return (
    <section id="contact" className="py-16 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        Get In <span className="text-blue-500">Touch</span>
      </motion.h2>

      {/* Main Container */}
      <motion.div
        className="max-w-6xl mx-auto p-6 grid grid-cols-1  md:grid-cols-2 gap-12 items-start"
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left: Contact Form */}
        <div>
          <h3 className="text-3xl font-semibold text-center  mb-6 text-blue-500">Message</h3>
          {status && (
            <p className={`text-center mb-4 font-semibold ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message/Feedback"
              className="w-full p-3 border rounded h-28 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white rounded shadow-md ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } transition duration-300 transform hover:scale-105`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-6 text-blue-500">Connect With Me</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-sm">
            Follow me on social media or reach out through these platforms!
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: FaFacebook, color: "text-blue-600 hover:text-blue-800", link: "https://www.facebook.com/mohita.buda.magara" },
              { icon: FaInstagram, color: "text-pink-500 hover:text-pink-700", link: "https://www.instagram.com/mohit_b_magar/" },
              { icon: FaLinkedin, color: "text-blue-700 hover:text-blue-900", link: "https://linkedin.com" },
              { icon: FaGithub, color: "text-gray-700 hover:text-black", link: "https://github.com/mohitbudha" },
              { icon: FaWhatsapp, color: "text-green-500 hover:text-green-700", link: "https://wa.me/977 9846277496" },
              { icon: FaPhone, color: "text-blue-500 hover:text-blue-700", link: "tel:+977 9846277496" },
              { icon: FaEnvelope, color: "text-red-500 hover:text-red-700", link: "mailto:mohitbudhamagar8@gmail.com" }
            ].map(({ icon: Icon, color, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} text-3xl transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
