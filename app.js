// const fs = require("fs");
// const express = require("express");
// const app = express();
// app.use(express.json());

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     data: {
//       tours,
//     },
//   });
// };

// const getTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour,
//     },
//   });
// };

// const createTour = (req, res) => {
//   console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
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

// const updateTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour: "updated tour",
//     },
//   });
// };
// const deleteTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)
// const port = 3000;
// app.listen(port, () => {
//   console.log("app listening on port 3000...");
// });



// //REFACTOR 1
//chaining similar routes
// const fs = require("fs");
// const express = require("express");
// const morgan = require("morgan");
// const app = express();

// //MIDDLEWARE
// app.use(express.json());
// app.use(morgan("dev"));
// //creating our own middleware 1
// app.use((req, res, next) => {
//   console.log("hello from the middleware");
//   next();
// });
// //creating our own middleware2
// app.use((req, res, next) => {
//   req.requestedTime = new Date().toISOString();
//   next();
// });

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //ROUTE HANDLERS
// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     timesx: req.requestedTime,
//     data: {
//       tours,
//     },
//   });
// };

// const getTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour,
//     },
//   });
// };

// const createTour = (req, res) => {
//   console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
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

// const updateTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour: "updated tour",
//     },
//   });
// };
// const deleteTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };

// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         "status": "err",
//         "message": "this route is not yet defined"
//     })
// };
// const getUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};
// const createUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};
// const updateUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};
// const deleteUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};

// //ROUTES
// // app.get("/api/v1/tours", getAllTours);
// // app.get("/api/v1/tours/:id", getTour);
// // app.post("/api/v1/tours", createTour);
// // app.patch("/api/v1/tours/:id", updateTour);
// // app.delete("/api/v1/tours/:id", deleteTour);
// app.route("/api/v1/tours").get(getAllTours).post(createTour);
// app
//   .route("/api/v1/tours/:id")
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

// app.route("/api/v1/users").get(getAllUsers).post(createUser);
// app
//   .route("/api/v1/users/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// //START SERVER
// const port = 3000;
// app.listen(port, () => {
//   console.log("app listening on port 3000...");
// });




// //REFACTOR 2
// //using different routers for different resources (mounting the routers)
// const fs = require("fs");
// const express = require("express");
// const morgan = require("morgan");
// const app = express();

// //MIDDLEWARE
// app.use(express.json());
// app.use(morgan("dev"));
// //creating our own middleware 1
// app.use((req, res, next) => {
//   console.log("hello from the middleware");
//   next();
// });
// //creating our own middleware2
// app.use((req, res, next) => {
//   req.requestedTime = new Date().toISOString();
//   next();
// });

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// //ROUTE HANDLERS
// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     timesx: req.requestedTime,
//     data: {
//       tours,
//     },
//   });
// };

// const getTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour,
//     },
//   });
// };

// const createTour = (req, res) => {
//   console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
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

// const updateTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour: "updated tour",
//     },
//   });
// };
// const deleteTour = (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((tour) => tour.id === id);
//   //   if(id > tours.length){
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "invalid ID",
//     });
//   }
//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };

// const getAllUsers = (req, res) => {
//     res.status(500).json({
//         "status": "err",
//         "message": "this route is not yet defined"
//     })
// };
// const getUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};
// const createUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};
// const updateUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};
// const deleteUser = (req, res) => {
//     res.status(500).json({
//       status: "err",
//       message: "this route is not yet defined",
//     });};

// //ROUTES
// const tourRouter = express.Router();
// const userRouter = express.Router();

// app.use("/api/v1/tours", tourRouter);
// app.use("/api/v1/users", userRouter)


// tourRouter.route("/").get(getAllTours).post(createTour);
// tourRouter
//   .route("/:id")
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

// userRouter.route("/").get(getAllUsers).post(createUser);
// userRouter
//   .route("/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// //START SERVER
// const port = 3000;
// app.listen(port, () => {
//   console.log("app listening on port 3000...");
// });





//REFACTOR 3
//separate files for different routers

const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
//MIDDLEWARE
app.use(cors());
app.use(express.json());
if(process.env.NODE_ENV === "development"){
app.use(morgan("dev"));}
//accessing static files
app.use(express.static(`${__dirname}/public`))
//creating our own middleware 1
app.use((req, res, next) => {
  console.log("hello from the middleware");
  next();
});
//creating our own middleware2
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});
//routers
app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)
module.exports = app;


