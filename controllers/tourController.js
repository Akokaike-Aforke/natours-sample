// const fs = require("fs");

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkBody = (req, res, next) =>{
//   if(!req.body.name || !req.body.price){
//     return res.status(400).json({
//       "status": "fail",
//       "message": "invalid input"
//     })
//   }
//   next();
// }

// exports.checkId = (req, res, next, val) =>{
//   const id = req.params.id * 1;
//   const tour = tours.find((tourItem) => tourItem.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   next();
// }
// exports.getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     timesx: req.requestedTime,
//     data: {
//       tours,
//     },
//   });
// };

// exports.getTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tourItem) => tourItem.id === id);
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour,
//     },
//   });
// };

// exports.createTour = (req, res) => {
//   console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   // const newTour = {...req.body, id: newId}
//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: "success",
//         tour: newTour,
//       });
//     }
//   );
// };

// exports.updateTour = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour: "updated tour",
//     },
//   });
// };
// exports.deleteTour = (req, res) => {
//     res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };






//REFACTOR 1
//reading data from a database instead

// const Tour = require('./../models/tourModel')
const Tour = require('../models/tourModel')

exports.getAllTours = async (req, res) => {
// await Tour.find({}, (err, result) => {
//   if (err) {
//     res.send(err);
//     console.log(err);
//   }
//   res.send(result);
//   console.log(result);
// });

  try{
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      result: tours.length,
      timesx: req.requestedTime,
      data: {
        tours,
      },
    });
  }
  catch(err){
    res.status(404).json({
      status:"fail",
      message:err
    })
  }
};

exports.getTour = async (req, res) => {
 try{
   const tour = await Tour.findById(req.params.id);
   res.status(200).json({
     status:"success",
     data:{
       tour
     }
   })
 }
 catch(err){
   res.status(404).json({
     status:"fail",
     message:err
   })
 }
};

exports.createTour = async (req, res) => {
  try{
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "succes",
      data: {
        tour: newTour,
      },
    });
  }
  catch(err){
    res.status(400).json({
      status: "fail",
      message: err
    })
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
    res.status(200).json({
      status:"success",
      data:{
        tour
      }
    })
  } 
  catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteTour = async (req, res) => {
    try {
      await Tour.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status:"success",
        data: null
      })
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
    
};
