/********************************************************************************* 
*  WEB322 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Chakshu Alawadhi    Student ID:150056208      Date: 2nd October 2022
********************************************************************************/ 
const {home,about,contact, info, careers} = require('../controllers/controllers.js')



const express = require('express')

const router = express.Router()

router.get('/home',home)

router.get('/about',about)

router.get('/contact',contact)

router.get('/info',info)

router.get('/careers',careers)

module.exports = router