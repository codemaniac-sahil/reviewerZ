import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    // setError("");
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  // const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>
            <NavLink to="/">ReviewerZ</NavLink>
          </h1>
        </div>
        {currentUser ? (
          <ul className="navlinks">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogOut}>LogOut</NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navlinks">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/login"> Login </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/signup">Signup</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/adminlogin">Admin Login</NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
