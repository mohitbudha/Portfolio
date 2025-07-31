import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/admin-login";
    } else {
      axios.get("https://my-portfolio-backend-1-db8u.onrender.com/api/auth/dashboard", {
        headers: { Authorization: token },
      })
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage("Unauthorized"));
    }
  }, []);

  return <h1>{message}</h1>;
};

export default Dashboard;
