const mongoose = require("mongoose");
const MovieEvent = require("./movieModel");
const seatSchema = mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MovieEvent",
    },
    seatBooked: [
      {
        userName: {
          type: String,
          default: "",
        },
        seatId: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const SeatEvent = mongoose.model("Seat", seatSchema);
module.exports = SeatEvent;
