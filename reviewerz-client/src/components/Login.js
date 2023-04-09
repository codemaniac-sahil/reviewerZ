import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import GoogleButton from "react-google-button";
// import "./styles/inputsection.css";

function Login() {
  const emailref = useRef();
  const pwdref = useRef();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     await googleAuthentication();
  //     navigate("/dashboard");
  //   } catch {
  //     console.log("error");
  //   }
  // };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailref.current.value, pwdref.current.value);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login-section">
        <div className="login-box">
          <div className="login-section-heading">
            <h1>Login</h1>
          </div>
          <p>{error}</p>
          <div className="login-form">
            <div className="form-input-field">
              <input
                type="text"
                placeholder="Username or email"
                required
                ref={emailref}
              />
              <input
                type="password"
                placeholder="Password"
                required
                ref={pwdref}
              />
            </div>
            <div className="login-buttons">
              <div className="links">
                <NavLink to="#">Forgot your password</NavLink>
                <NavLink to="/signup">Don't have an account</NavLink>
              </div>
              <div className="buttons">
                {/* <GoogleButton onClick={handleGoogleSignIn} /> */}
                <button disabled={loading} onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
