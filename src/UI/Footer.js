import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  // Rolpa Kotgaun approx latitude/longitude
  const position = [28.335, 82.306]; 

  return (
    <footer className="bg-gray-800 text-gray-300 px-6 md:px-16 pt-8 pb-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 md:col-span-1">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About Me</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 md:col-span-1">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>Email: <a href="mailto:mohit@example.com" className="hover:text-blue-500 transition">mohit@example.com</a></p>
          <p>Phone: <a href="tel:+9779812345678" className="hover:text-blue-500 transition">+977 9846277496</a></p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <h3 className="font-semibold text-lg mb-2">Follow Me</h3>
          <div className="flex gap-6 text-lg">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:mohit@example.com" className="hover:text-red-500 transition" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        {/* Location with Map */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> Location
          </h3>
          <p>Rolpa Kotgaun, Nepal</p>

          <div className="mt-4 h-48 w-full rounded-lg overflow-hidden shadow-lg">
            <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>Mohit Budha Magar's Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Mohit Budha Magar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
