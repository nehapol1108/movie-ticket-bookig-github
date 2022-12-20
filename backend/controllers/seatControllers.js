const seatBook = require("../models/seat");
const mongoose = require("mongoose");
const SeatEvent = require("../models/seat");

module.exports.postSeatBook = async (req, res) => {
  try {
    const {movieId,seatBooked} = req.body;
    let seat = await SeatEvent.findById(bookId);
    let obj = {
      seatId: req.body.seatId,
      userName: req.body.userName
    };
    seat.seatBooked.push(obj);
    await seat.save(); //saving it to the database
    res.send(seat);
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
