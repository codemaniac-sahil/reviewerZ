import React, { useCallback } from "react";
// import { NavLink } from "react-router-dom";
import "./styles/showbook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
function ShowBook() {
  const { currentUser } = useAuth();
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([]);
  // const navigate = useNavigate();
  const { id } = useParams();
  console.log(currentUser.uid);
  const [book, setBook] = useState([]);
  console.log(currentUser.displayName);
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
      await setDoc(doc(db, "users", currentUser.uid, "bookId", id), {
        email: currentUser.email,
        bookId: id,
        review: review,
      });
      getReview();
    } catch (error) {
      console.log(error);
    }
  };

  const getReview = useCallback(async () => {
    try {
      const docRef = doc(db, "users", currentUser.uid, "bookId", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data().review);
        setReviewList(docSnap.data().review);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentUser.uid, id]);
  useEffect(() => {
    getReview();
  }, [getReview]);

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
            <h1>Your Review</h1>

            <p>{reviewList}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default ShowBook;
