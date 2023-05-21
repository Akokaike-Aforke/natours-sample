// const express = require("express");
// const {
//   checkBody,
//   checkId,
//   getAllTours,
//   createTour,
//   getTour,
//   updateTour,
//   deleteTour,
// } = require("../controllers/tourController");

// const router = express.Router();
// //param middleware
// // router.param("id", (req, res, next, val) => {
// //   console.log(`the id is ${val}`);
// //   next();
// // });

//this param middleware is not needed anymore because we dont have to assign id by ourselves. the db will do that for us
// router.param("id", checkId);

// router.route("/").get(getAllTours).post(checkBody, createTour);
// router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

// module.exports = router;




//REFACTOR1
const express = require("express");
const {
  checkBody,
  checkId,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
