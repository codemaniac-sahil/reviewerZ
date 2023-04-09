import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const uname = useRef();
  const pwd = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    if (uname.current.value === "admin" && pwd.current.value === "admin") {
      navigate("/admindashboard");
    } else {
      console.log("error");
      // navigate("/adminlogin");
    }
  };
  return (
    <>
      <div className="login-section">
        <div className="login-box">
          <div className="login-section-heading">
            <h1>Admin Login</h1>
          </div>
          <div className="login-form">
            <div className="form-input-field">
              <input type="text" placeholder="Username" ref={uname} />
              <input type="password" placeholder="Password" ref={pwd} />
            </div>
            <div className="login-buttons">
              <div className="buttons">
                <button onClick={handleClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
