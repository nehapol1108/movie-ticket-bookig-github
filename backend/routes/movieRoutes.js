const express=require('express');
const router=express.Router();
const movieContoller = require('../controllers/movieControllers')

router.post('/',movieContoller.postMovie);
router.get('/',movieContoller.getAllMovies);
router.get('/:id',movieContoller.getMovieById);
module.exports=router;