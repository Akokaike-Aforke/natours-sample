// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const morgan = require("morgan")
// const mongoose= require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// dotenv.config({ path: "./config.env" });
// const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then((con) => {
//     // console.log(con.connections)
//     console.log("DB connection successful");
//   });

// const tourSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "a tour must have a name"],
//       unique: true,
//     },
//     rating: {
//       type: Number,
//       default: 4.5,
//     },
//     price: {
//       type: Number,
//       required: [true, "a tour must have a price"],
//     },
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// const Tour = mongoose.model("Tour", tourSchema);

// app.get("/api/v1/tours", async (req, res) => {
//   await Tour.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//       console.log(err);
//     }
//     res.send(result);
//     console.log(result);
//   });
// })

// const port = 3000;
// const startApp = () =>{
//   try{
//     app.listen(port, () => {
//       console.log("app listening on port 3000...");
//     });
//   }
//   catch(err){
//     console.log(err);
//     process.exit(1);
//   }
// }
// startApp();

import express from "express";
import cors from "cors";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://lucykenneth54:fl2Ol06OfNABJTG5@cluster0.dhjq5s1.mongodb.net/natours-2?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then((con) => {
    // console.log(con.connections)
    console.log("DB connection successful");
  });

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "a tour must have a name"],
      unique: true,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    price: {
      type: Number,
      required: [true, "a tour must have a price"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Tour = mongoose.model("Tour", tourSchema);

app.get("/api/tours", async (req, res) => {
  await Tour.find({}, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.send(result);
    console.log(result);
  });
});

const port = 3000;
const startApp = () => {
  try {
    app.listen(port, () => {
      console.log("app listening on port 3000...");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
startApp();
