/********************************************************************************* 
*  WEB322 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Chakshu Alawadhi    Student ID:150056208      Date: 2nd October 2022
********************************************************************************/

const path = require('path')

const home = (req,res)=>{

    res.send("<body bgcolor='pink'><h1 style='color:green; background-color:white; '>Welcome From Home Page</h1></body>")
console.log(path.join(process.cwd(),'public','home.html'))
   res.sendFile(path.join(process.cwd(),'public','home.html'))
}

const about = (req,res)=>{

    res.send("<body bgcolor='yellow'><h1 style='color:red; background-color:green; '>Welcome From About Page</h1></body>") 
    
    res.sendFile(path.join(process.cwd(),'public','about.html'))
}

const contact = (req,res)=>{

    res.send("<body bgcolor='sky blue'><h1 style='color:green; background-color:orange; '>Welcome From Contact Page</h1></body>") 
   res.sendFile(path.join(process.cwd(),'public','contact.html'))
}

const info = (req,res)=>{

   res.render('info.ejs')
}

const careers = (req,res)=>{

   res.render('careers.ejs')
}
 
module.exports = {home,about,contact,info,careers}