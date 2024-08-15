const express = require('express');
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors=require('cors');
const path = require("path");

if(process.env.NODE_ENV !=="PRODUCTION"){
    require("dotenv").config({path : "backend/configs/config.env"});
  }
const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}))
app.use(fileUpload());
app.use(express.static(path.join(__dirname,"../frontend/build")));
// Route imports
const product = require("./routes/productroute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1/",order);
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",payment);
app.use(errorMiddleware);
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
})
module.exports = app;