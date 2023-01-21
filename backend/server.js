const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const app = express();
app.use(express.json()); // to accept json data

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
mongoose.set("strictQuery", false);
dotenv.config();
connectDB();


app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:3000"
}));
app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server listening on ${PORT}`));
