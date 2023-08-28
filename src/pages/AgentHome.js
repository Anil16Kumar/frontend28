import React from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px",
  textDecoration: "none",
  cursor: "pointer",
};

const logoutButtonStyle = {
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px",
  textDecoration: "none",
  cursor: "pointer",
};

const AgentHome = () => {
  return (
    <div> 
      <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px" }}>
        <ul style={{ display: "flex", justifyContent: "flex-end", listStyle: "none" }}>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Agent Account</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Account</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Marketing</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Insurance</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Account</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="/agentLogin" style={logoutButtonStyle}>Logout</Link>
          </li>
        </ul>
      </nav>
 
      <div className="contact">
        <h1>THIS IS AGENT HOME PAGE</h1> 
      </div>
    </div>
  );
};

export default AgentHome;