const express=require('express')
const router=express.Router();
let User = require('../models/users');
let userController = require("../controllers/userController.js");
router.get("/", userController.userMainPage);
router.post('/new-user', userController.postNewUser)
router.get('/users-info', userController.usersList)
router.get('/user-edit', userController.editUsers)
router.post('/user-edit', userController.editInfo)
router.post('/delete', userController.userDelete)
module.exports=router;