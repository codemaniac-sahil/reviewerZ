import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="hero-class-heading">
          <h1>Book Reviewing Website</h1>
        </div>
        <div className="hero-class-motto">
          <h3>
            Exploring the depths of literature, sharing the joy of reading.
          </h3>
        </div>
        <div className="hero-signup-link">
          <NavLink to="/signup">Get Started</NavLink>
        </div>
      </div>
    </>
  );
}

export default Homepage;
