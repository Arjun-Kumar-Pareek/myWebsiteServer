const express = require("express");
const userRoute = express();
const bodyParser = require("body-parser");
const auth = require("../middleware/auth");
const helper = require("../utils/helper");
userRoute.use(express.static("public"));
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));


const userController = require("../controllers/usersController");

//register api
userRoute.post(
  "/register-user",
  helper.uploadImage.single("avtar"),
  userController.registerUser
);

userRoute.post(
  "/login-user",
  userController.loginUser
);

userRoute.post(
  "/user-profile",
  auth,
  userController.userProfile
);

userRoute.post(
  "/update-profile",
  auth, helper.uploadImage.single("avtar"),
  userController.updateProfile
);

userRoute.get(
  "/delete-all-user",
  auth,
  userController.deleteAllUser
);

userRoute.get(
  "/view-all-user",
  auth,
  userController.viewAllUser
);

userRoute.get(
  "/verify-email",
  userController.verifyEmail
)

// // login api
// userRoute.post("/login", userController.user_login);

// //update password route
// userRoute.post("/update-password", auth, userController.update_password);

// //forget password route
// userRoute.post("/forget-password", userController.forget_password);

// //reset password 
// userRoute.get("/reset-password", userController.reset_password);

// // get users api
// userRoute.get("/getUsers", auth, userController.get_users);



module.exports = userRoute;