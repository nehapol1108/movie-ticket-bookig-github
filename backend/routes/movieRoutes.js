const express=require('express');
const router=express.Router();
const movieContoller = require('../controllers/movieControllers');
const {protect} =require("../middleware/authMiddleware");
router.post('/',movieContoller.postMovie);
router.get('/',protect,movieContoller.getAllMovies);
router.get('/:id',movieContoller.getMovieById);
router.post('/book',movieContoller.bookMovie);
module.exports=router;