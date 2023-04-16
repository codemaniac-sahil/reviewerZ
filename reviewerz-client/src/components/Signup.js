import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const emailref = useRef();
  const pwdref = useRef();
  const cpwdref = useRef();
  const username = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();

    if (pwdref.current.value !== cpwdref.current.value) {
      return setError("Password do not match");
    } else if (pwdref.current.value.length < 6) {
      return setError("Password length should be more than 6 characters");
    }
    try {
      setError("");

      setLoading(true);
      await signup(emailref.current.value, pwdref.current.value).then(
        (userCredential) => {
          console.log(userCredential);
          // Signed in
          var user = userCredential.user;
          user.updateProfile({
            displayName: username.current.value,
          });
          // ...
        }
      );

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
            <h1>Signup</h1>
          </div>
          <div className="login-form">
            <p>{error}</p>
            <div className="form-input-field">
              <input type="text" placeholder="Username" ref={username} />
              <input type="text" placeholder="Email" ref={emailref} required />

              <input
                type="password"
                placeholder="Password (Max 6 character )"
                ref={pwdref}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                ref={cpwdref}
                required
              />
            </div>
            <div className="login-buttons">
              <div className="links">
                <NavLink to="/login">Already have an account</NavLink>
              </div>
              <div className="buttons">
                <button disabled={loading} onClick={handleSignup}>
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
