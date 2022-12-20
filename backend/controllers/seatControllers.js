const seatBook = require("../models/seat");
const mongoose = require("mongoose");
const SeatEvent = require("../models/seat");

module.exports.postSeatBook = async (req, res) => {
  try {
    let detail = await SeatEvent.find({ movieId: req.body.movieId });
    console.log(detail);
    let detailArray = detail.seatBooked ? detail.seatBooked : [];
    console.log("body ", req.body);
    console.log("detail array", detailArray);
    let newDetail = [
      ...detailArray,
      {
        userName: req.body.userName,
        seatId: req.body.seatId,
      },
    ];
    // detailArray.push(newDetail);
    // const query = { movieId: req.body.movieId };
    // const update = { $set: { seatBooked: newDetail } };
    // const options = { upsert: true };
    console.log("mewDeatil", newDetail);
    // await SeatEvent.updateOne(query, update, options);
    console.log(detailArray);
    await detail.save();
    res.status(201).send(newDetail);
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
