const express = require("express");
const { body } = require("express-validator/check");

const feedController = require("../controllers/feed");
const router = express.Router();

//localhost:8080/feeds/post
router.get("/posts", feedController.getFeeds);
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5, max: 200 }),
  ],
  feedController.createPost
);

module.exports = router;
