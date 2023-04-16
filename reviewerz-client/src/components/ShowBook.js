import React, { useCallback } from "react";
// import { NavLink } from "react-router-dom";
import "./styles/showbook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ShowBook() {
  const { currentUser } = useAuth();
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  // const navigate = useNavigate();
  const { id } = useParams();
  console.log(currentUser.uid);
  const [book, setBook] = useState([]);
  console.log(currentUser.displayName);
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const date = getDate();
  useEffect(() => {
    fetch(`https://reviewerz-server.onrender.com/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);
  const handleAddReview = async (e) => {
    e.preventDefault();
    try {
      const addReview = {
        review: review,
        name: currentUser.displayName,
        date: date,
      };
      const res = await fetch(
        `https://reviewerz-server.onrender.com/comment/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addReview),
        }
      );
      const data = await res.json();
      console.log(data);
      getReviews();
      setReview("");
      console.log(reviews);
    } catch (error) {
      console.log(error);
    }
  };
  const getReviews = useCallback(async () => {
    try {
      const res = await fetch(`https://reviewerz-server.onrender.com/${id}`);
      const data = await res.json();
      // console.log(data.comments);
      setReviews(data.comments);
      // console.log(reviews);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <>
      <div className="showbook">
        <div className="showbook-heading">
          <h1>{book.bookName}</h1>
        </div>
        <div className="showbook-info">
          <div className="showbook-info1">
            <div className="showbook-img">
              <img src={book.imgUrl} alt="book img" />
            </div>
            <div className="showbook-desc">
              {/* <h1>Book Name</h1> */}
              <p>Author Name : {book.authorName}</p>
              <p>Genre : {book.category} </p>
              <p>Available on : {book.availOn} </p>
              {/* <p>Price</p> */}
              <p>Book Description : {book.synopsis} </p>
            </div>
          </div>
          <div className="showbook-info2">
            <div className="showbook-review"></div>
          </div>
        </div>
      </div>

      <div className="write-review">
        <h1>Write a Review</h1>
        <form>
          <div className="form-group">
            {/* <label for="exampleFormControlTextarea1">Review</label> */}
            <input
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <button
              type="submit"
              className="btn-class"
              onClick={handleAddReview}
            >
              Add Review
            </button>

            {/* <button type="reset" className="btn btn-primary">
              Reset
            </button>

            <button type="button" className="btn btn-primary">
              Cancel
            </button> */}

            {/* <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          <input type="button" value="Cancel" /> */}

            {/* <button type="submit" className="btn btn-primary">

</button> */}
          </div>
          <div className="yourReview">
            <h1>See {/*  */}Review</h1>
            {reviews.map((review) => (
              <div className="review">
                <div className="review-info">
                  <div className="review-info1">
                    <div className="review-desc">
                      <h1>{review.name}</h1>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="review-info2">
                    <div className="review-review">
                      <p>{review.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default ShowBook;
