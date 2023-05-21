const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

//express environment variable
// console.log(app.get("env"));

//node environment variable
dotenv.config({ path: "./config.env" });
// console.log(process.env.PORT);

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections)
    console.log("DB connection successful");
  });

//START SERVER
const PORT = process.env.PORT || 3000;
const startApp = () => {
  try {
    app.listen(PORT, () => {
      console.log("app listening on port 3000...");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startApp();
