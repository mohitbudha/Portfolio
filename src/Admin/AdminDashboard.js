import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://my-portfolio-backend-1-db8u.onrender.com/api/messages", {
      headers: { Authorization: token }
    })
    .then(res => setMessages(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Messages</h2>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p>No messages found</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="bg-white p-4 rounded shadow">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-500">{new Date(msg.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
