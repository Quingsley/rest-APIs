const express = require("express");
const { body } = require("express-validator/check");

const statusController = require("../controllers/status");
const isAuth = require("../middlewares/is-auth");
const router = express.Router();

router.get("/user-status", isAuth, statusController.getUserStatus);
router.patch(
  "/user-status",
  isAuth,
  [body("status").not().isEmpty().trim().escape()],
  statusController.updateUserStatus
);

module.exports = router;
