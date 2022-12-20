const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const app = express();
app.use(express.json()); // to accept json data

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seatRoutes = require("./routes/seatRoutes");
mongoose.set("strictQuery", false);
dotenv.config();
// connectDB();
mongoose.connect(
  "mongodb://localhost:27017/booking",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else console.log("success");
  }
);

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/seat", seatRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server listening on ${PORT}`));
