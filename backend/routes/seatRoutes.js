const express = require("express");
const router = express.Router();
const seatContoller = require("../controllers/seatControllers");
router.post("/", seatContoller.postSeatBook);
router.post("/post", seatContoller.addSeatBook);
router.get("/get", seatContoller.gets);
module.exports = router;
