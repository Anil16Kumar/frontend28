import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleLogin = () => {
     
    // if (loginId === "user" && password === "password") {
    //   navigate("/employeeHome"); // Navigate to the customer home page
    // } else {
    //   alert("Invalid login credentials. Please try again.");
    // }
    // the loginId and password actions 
    navigate("/employeeHome");   
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1>Employee Login</h1>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="loginId" style={{ fontWeight: "bold", marginBottom: "5px" }}>
            Login ID:
          </label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ fontWeight: "bold", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;