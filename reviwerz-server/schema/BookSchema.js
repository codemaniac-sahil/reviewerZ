import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
  bookName: String,
  authorName: String,
  category: String,
  availOn: String,
  synopsis: String,
  cloudinary_id: String,
  imgUrl: String,
});
const book = mongoose.model("books", bookSchema);
export default book;
