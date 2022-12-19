const mongoose = require("mongoose");
const movieSchema = mongoose.Schema(
    {
      moviename: { type: String, required: true },
      movietprice: { type: String, required: true },
      movietime: { type: String, required: true },
    },
    { timestamps: true }
  );

const MovieEvent = mongoose.model("Movie", movieSchema);
module.exports = MovieEvent;