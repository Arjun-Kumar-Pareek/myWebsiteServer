const express = require('express');
require('dotenv').config()
const config = require("./config/config");
const App = express();
const cors = require('cors');
// console.log(process.env.FILE_PATH);
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'http://localhost';
App.use(express.static("public"));

//Allow request from all origins
App.use(cors());

//User Route
const userRoute = require("./routes/usersRoute");
App.use("/api", userRoute);

//Category Route
const categoryRoute = require("./routes/categoryRoute");
App.use("/api", categoryRoute);

//Sub Category Route
const SubCategoryRoute = require("./routes/subCategoryRoute");
App.use("/api", SubCategoryRoute);

//Company Route
const companyRoute = require("./routes/companyRoute");
App.use("/api", companyRoute);

//Product Route
const productRoute = require("./routes/productRoute");
App.use("/api", productRoute);


App.get('/', function (req, res) {
  res.send('Hello World')
});

App.get('*', function (req, res) {
  // console.log(req);
  res.status(404).send({ success: false, message: "404 not found" })
});

const serverStart = async () => {
  try {
    await config.connectDB();
    App.listen(PORT, () => {
      console.log(`Server is listen on link ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

serverStart();
