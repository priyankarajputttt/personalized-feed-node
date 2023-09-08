const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userSchemas = require("../schemas/userSchema");
const validateRequest = require("../validator/validator");

// User Registration
router.post(
  "/register",
  validateRequest(userSchemas.userRegister, "body"),
  userController.registerUser
);
console.log(userSchemas.userRegister);

// User Login
router.post(
  "/login",
  validateRequest(userSchemas.userLogin, "body"),
  userController.loginUser
);

module.exports = router;
