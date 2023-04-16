import express from "express";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";
import Book from "../schema/BookSchema.js";

const router = express.Router();
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    let book = new Book({
      bookName: req.body.bname,
      authorName: req.body.aname,
      category: req.body.category,
      availOn: req.body.availon,
      synopsis: req.body.synopsis,
      imgUrl: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await book.save();
    res.json(book);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    await cloudinary.uploader.destroy(book.cloudinary_id);
    await book.deleteOne();
    res.json("Book Deleted");
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    await cloudinary.uploader.de;
    stroy(book.cloudinary_id);
    console.log(book);
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      bookName: req.body.bname || book.bookName,
      authorName: req.body.aname || book.authorName,
      category: req.body.category || book.category,
      availOn: req.body.availon || book.availOn,
      synopsis: req.body.synopsis || book.synopsis,
      imgUrl: result ? result.secure_url : book.imgUrl,
      cloudinary_id: result ? result.public_id : book.cloudinary_id,
    };
    book = await Book.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(book);
  } catch (error) {
    console.log(error);
  }
});
router.post("/comment/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let book = await Book.findById(req.params.id);
    console.log(book);
    let comment = {
      review: req.body.review,
      name: req.body.name,
      date: req.body.date,
    };
    console.log(comment);
    book.comments.push(comment);
    await book.save();

    console.log(comment);

    res.json(book);
  } catch (error) {
    console.log(error);
  }
});

export default router;
