/********************************************************************************* 
*  WEB322 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Chakshu Alawadhi    Student ID:150056208      Date: 2nd October 2022
********************************************************************************/ 

const router = require('./routes/routes.js')

const express = require('express')

const app = express()

app.use('/',router)


app.use(express.static('public'))

app.set('view engine','ejs')

app.listen(3100,()=>{

    console.log("App is listening at port 3100!!!")
})