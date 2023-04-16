import mongoose from "mongoose";
// const reviewSchema = mongoose.Schema({
//   review: String,
//   // name: String,
//   // date: String,
// });
// // // const review = mongoose.model("reviews", reviewSchema);

// const commentSchema = mongoose.Schema({
//   comment: String,
//   // name: String,
//   // date: String,
// });
// // // const review = mongoose.model("reviews", reviewSchema);

// const comment = mongoose.model("comments", commentSchema); /*  */

const bookSchema = mongoose.Schema(
  {
    bookName: String,
    authorName: String,
    category: String,
    availOn: String,
    synopsis: String,
    cloudinary_id: String,
    imgUrl: String,
    comments: [
      {
        review: String,
        name: String,
        date: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const book = mongoose.model("books", bookSchema); /*  */
// export default comment;
export default book;
// export default review;
