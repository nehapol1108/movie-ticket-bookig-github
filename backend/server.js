const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose=require("mongoose");
const app = express();
app.use(express.json());// to accept json data

const userRoutes=require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
mongoose.set('strictQuery', false);
dotenv.config();
connectDB();
app.get("/",(req,res)=>{
    res.send("API is running");
})

app.use('/api/user',userRoutes);
app.use('/api/movie',movieRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server listening on ${PORT}`));