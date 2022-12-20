const seatBook = require("../models/seat");
const mongoose = require("mongoose");
const SeatEvent = require("../models/seat");

module.exports.postSeatBook = async (req, res) => {
  try {
    const { movieId, seatBooked } = req.body;
    const query = {
      movieId: "movieId",
    };
    const updateDoc = {
      $push: {
        "seatBooked.$[]": "seatBooked",
      },
    };
    const result = await SeatEvent.updateOne(query, updateDoc);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports.addSeatBook = async (req, res) => {
  try {
    const seat = new SeatEvent(req.body);
    const createSeatEvent = await seat.save();
    res.status(201).send(createSeatEvent);
  } catch (e) {
    res.status(400).send(e);
  }
};
module.exports.gets = async (req, res) => {
  const data = await SeatEvent.find();
  console.log(data);
  res.send(data);
};
