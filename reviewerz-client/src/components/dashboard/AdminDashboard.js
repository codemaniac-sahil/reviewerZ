import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://reviewerz-server.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  const deleteTheBook = (id) => {
    fetch(`https://reviewerz-server.onrender.com/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Book Deleted Successfully");
          navigate("/admindashboard");
        }
      });
  };
  console.log(books);
  return (
    <>
      <div className="admin-dashboard">
        <div className="admin-dashboard-heading">
          <h1> Admin Dashboard</h1>
        </div>
        <div className="book-info-table">
          <table>
            <tr>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Category</th>
              <th>Available On</th>
              <th>Action</th>
            </tr>
            {books.map((book) => (
              <tr>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                <td>{book.category}</td>
                <td>{book.availOn}</td>
                <td className="action-btn">
                  {" "}
                  {/* <button component=>Edit</button> */}
                  <NavLink to={`/editbook/${book._id}`}>Edit</NavLink>
                  <button
                    onClick={() => {
                      deleteTheBook(book._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="addbook">
          <NavLink to="/addbook">Add Book</NavLink>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
