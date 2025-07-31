import React, { useState } from "react";
import axios from "axios";

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://my-portfolio-backend-1-db8u.onrender.com/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      onLoginSuccess();
    } catch (err) {
      setError("Invalid Credentials!");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
