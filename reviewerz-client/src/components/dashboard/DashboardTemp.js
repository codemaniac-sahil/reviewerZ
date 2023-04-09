import React, { useEffect, useState } from "react";
// import { useAuth } from "./context/AuthContext";
// useAuth
import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import "../styles/userdashboard.css";

function DashboardTemp() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://reviewerz-server.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  // console.log(books);
  // const navigate = useNavigate();
  // const handleLogOut = async () => {
  //   setError("");
  //   try {
  //     await logout();
  //     navigate("/login");
  //   } catch {
  //     setError("Failed to logout");
  //   }
  // };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-heading">
          <h1>Review Book</h1>
        </div>
        <div className="dashboard-info">
          <div className="dashboard-info1">
            <div className="newly-added">
              <h1> Newly Added </h1>
            </div>
            <div className="dashboard-books-img">
              {books.map((book) => (
                <NavLink to={`/showbook/${book._id}`}>
                  <div className="img-flow">
                    <img src={book.imgUrl} alt="book img" />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTemp;
