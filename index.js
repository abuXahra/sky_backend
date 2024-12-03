const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");

// const cookieParser = require("cookie-parser");
const cors = require("cors");
// const multer = require("multer");
// const path = require("path");

const userRoute = require("./route/userRoute");

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:3000", "https://skymemorialforum.onrender.com/"],
  // methods: ["POST", "GET"],
  credentials: true,
};

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors(corsOptions)); //to syncronize front and backenth

// app.use(cookieParser());

// ROUTES
app.use("/api/users", userRoute);

//database connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected successfuly");
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, () => {
  connectDb();
  console.log(`server is running on port ${port}'`);
});
