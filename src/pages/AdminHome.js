import React, { useState } from "react";
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

const dropdownArrowStyle = {
  marginLeft: "5px",
  fontSize: "12px",
  verticalAlign: "middle",
};

const AdminHome = () => {
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);

  const toggleAgentDropdown = () => {
    setShowAgentDropdown(!showAgentDropdown);
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px" }}>
        <ul style={{ display: "flex", justifyContent: "flex-end", listStyle: "none" }}>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Dashboard</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <div style={{ position: "relative" }}>
              <span onClick={toggleAgentDropdown} style={buttonStyle}>
                Agent
                <span style={dropdownArrowStyle}> ▼ </span>
              </span>
              {showAgentDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    backgroundColor: "green",
                    border: "1px solid #007bff",
                    borderRadius: "4px",
                    minWidth: "200px",
                    zIndex: "1",
                    marginTop: "5px", // Adjusted position
                  }}
                >
                  <Link to="#" style={{ color: "white", display: "block", padding: "8px 26px", textDecoration: "none" }}>
                    Add Agent
                  </Link>
                  <Link to="#" style={{ color: "white", display: "block", padding: "8px 26px", textDecoration: "none" }}>
                    View Agent
                  </Link>
                  <Link to="#" style={{ color: "white", display: "block", padding: "8px 26px", textDecoration: "none" }}>
                    View Commission
                  </Link>
                  <Link to="#" style={{ color: "white", display: "block", padding: "8px 26px", textDecoration: "none" }}>
                    View Commission Withdrawal
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Insurance</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Queries</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Insurance Type</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Settings</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="#" style={buttonStyle}>Account</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="/adminLogin" style={logoutButtonStyle}>Logout</Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="contact">
        <h1>THIS IS ADMIN HOME PAGE</h1>
      </div>
    </div>
  );
};

export default AdminHome;