import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import Connection from "./database/db.js";

import mongoose from "mongoose";
const app = express();
const PORT = 5000;

Connection();
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
