const app = require("./app");
// const express=require('express');
// const app=express()
// const dotenv =require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("./configs/database");
// const cors=require('cors');

// app.use(cors());


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


// connecting to data base
if(process.env.NODE_ENV !=="PRODUCTION"){
  require("dotenv").config({path : "backend/configs/config.env"});
}
connectDatabase();
cloudinary.config({
cloud_name: process.env.CLOUDINARY_NAME,
api_key : process.env.CLOUDINARY_API_KEY,
api_secret : process.env.CLOUDINARY_API_SECRET
}
)
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

  // Unhandled Promise Rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });