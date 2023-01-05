const express = require("express");
const { body } = require("express-validator/check");

const authController = require("../controllers/auth");
const User = require("../models/user");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email address")
      .custom(async (value, { req }) => {
        try {
          const user = await User.findOne({ email: value });
          console.log(user);
          if (user) {
            return Promise.reject("Email already exists");
          }
        } catch (errors) {
          throw errors;
        }
      }),
    body("name").trim(),
    body("password").trim().isLength({ min: 8 }),
  ],
  authController.signup
);

router.post("/login", authController.login);
module.exports = router;
