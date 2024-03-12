const express = require('express');
const router = require('./src/routes/api');

const app = new express();
const bodyParser = require('body-parser');


// Security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database
const mongoose = require('mongoose');

//Security middleware implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//body-parser implement
app.use(bodyParser.json())

//Request Rate-Limit
const limiter = rateLimit({windowMS: 15*60*1000, max: 3000})
app.use(limiter)

//MongoDB Database Connection
let URI = "mongodb://0.0.0.0:27017/Todo";
let OPTION = {user:'',pass:'',autoIndex:true}
mongoose.connect(URI,OPTION)
if(mongoose.connect){
    console.log("Connection Successful")
}
else{
    console.log('Connection Failed')
}

//Routing Implement
app.use("/api/v1",router);

//Undefined Route
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail", data:"Not Found"})
});


module.exports = app;