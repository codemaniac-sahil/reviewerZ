import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/addbook.css";

function AddBook() {
  const navigate = useNavigate();
  const defaultBook = {
    bName: "",
    aName: "",
    category: "",
    availOn: "",
    synopsis: "",
  };
  const [book, setBook] = useState(defaultBook);
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setBook({ ...book, [name]: value });
  };
  // console.log(book);
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("bname", book.bName);
      formData.append("aname", book.aName);
      formData.append("category", book.category);
      formData.append("availon", book.availOn);
      formData.append("synopsis", book.synopsis);
      formData.append("image", book.image);
      const res = await fetch("https://reviewerz-server.onrender.com", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setBook(defaultBook);
        navigate("/admindashboard");
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-book-section">
      <div className="add-book-inner-section">
        <div className="add-book-heading">
          <h1>Add Book</h1>
        </div>
        <div className="add-book-form">
          <div className="form-info1">
            <input
              type="text"
              placeholder="Book Name"
              name="bName"
              value={book.bName}
              onChange={handleChange("bName")}
            />
            <input
              type="text"
              placeholder="Author Name"
              value={book.aName}
              onChange={handleChange("aName")}
              name="aName"
            />
          </div>
          <div className="form-info1">
            <input
              type="text"
              placeholder="Category"
              value={book.category}
              onChange={handleChange("category")}
              name="category"
            />
            <input
              type="text"
              placeholder="Available on"
              value={book.availOn}
              onChange={handleChange("availOn")}
              name="availOn"
            />
          </div>
          <div className="textfield">
            <textarea
              cols="80"
              rows="21"
              placeholder="Synopsis"
              value={book.synopsis}
              name="synopsis"
              onChange={handleChange("synopsis")}
            />
          </div>
          <div className="upload-file">
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange("image")}
            />
          </div>
          <div className="submit-button">
            <button onClick={handleSubmit}>Add Book</button>
          </div>
        </div>
      </div>
      <NavLink to="/admindashboard">Go back to admin panel</NavLink>
    </div>
  );
}

export default AddBook;
