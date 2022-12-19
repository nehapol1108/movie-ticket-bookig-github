const MovieEvent = require("../models/movieModel");
const mongoose = require("mongoose");


module.exports.postMovie = async (req, res) => {
   try{
    const movie = new MovieEvent(req.body);
    const createMovieEvent = await movie.save();
    res.status(201).send(createMovieEvent);

  }catch(e){
    res.status(400).send(e);
  } 
};
// get all side events
module.exports.getAllMovies = async (req, res) => {
  try {
    console.log("[movieEvents: getAllMovies] getting all Movie events");

    const movieEvents = await MovieEvent.find();
    if (movieEvents) {
      console.log("[movieEvents: getAllMovies] all movies retrieved");

      return res.json({
        status: true,
        data: movieEvents,
      });
    } else {
      console.log("[movieEvents: getAllMovies] No movies available!");

      return res.json({
        status: true,
        data: {
          message: "No movies!",
        },
      });
    }
  } catch (err) {
    const message =
      "[movieEvents: getAllMovies] Error while getting all movies " + err;

    console.log("[movieEvents: getAllMovies] Error:", err);

    return res.json({
      status: false,
      data: null,
      error: {
        code: 404,
        message: "Error in getting movies!",
      },
    });
  }
};

// get event with _id = id
module.exports.getMovieById = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    console.log("[movieEvents: getMovieById] req params", req.params);

    var isValid = mongoose.Types.ObjectId.isValid(_id);
    if (!isValid) {
      const message = "[movieEvents: getMovieById] movie id is invalid";

      console.log(message);
      return res.json({
        status: false,
        data: null,
        error: {
          code: 404,
          message: "movie id is invalid",
        },
      });
    }

    console.log("[movieEvents: getMovieById] movie id is valid");
    const movieEvent = await MovieEvent.findById(_id);
    if (!movieEvent) {
      const message = "[movieEvents: getMovieById] movie doesn't exists";

      console.log(message);

      return res.json({
        status: false,
        data: null,
        error: {
          code: 404,
          message: "movie doesn't exist!",
        },
      });
    } else {
      console.log("[movieEvents: getMovieById] movie found");

      return res.json({
        status: true,
        data: {
          data: movieEvent,
          message: "movie found",
        },
      });
    }
  } catch (err) {
    const message =
      "[movieEvents: getMovieById] error while getting movie by id " + err;

    console.log(message);

    return res.json({
      status: false,
      data: null,
      error: {
        code: 500,
        message: "Error in getting movie!",
      },
    });
  }
};
