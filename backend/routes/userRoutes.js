const express=require('express');
const router=express.Router();
const { registerUser,authUser,allUsers ,getUser}=require('../controllers/userControllers');
const {protect} =require("../middleware/authMiddleware");

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post('/login',authUser);
router.get('/:id',protect,getUser);
module.exports=router;
