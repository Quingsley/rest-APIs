const express = require("express");
const { body } = require("express-validator/check");

const feedController = require("../controllers/feed");
const router = express.Router();

const isAuth = require("../middlewares/is-auth");

//localhost:8080/feeds/post
router.get("/posts", isAuth, feedController.getPosts);
router.post(
  "/post",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5, max: 200 }),
  ],
  feedController.createPost
);

router.get("/post/:postId", isAuth, feedController.getSinglePost);
router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5, max: 200 }),
  ],
  feedController.updatePost
);

router.delete("/post/:postId", isAuth, feedController.deletePost);
module.exports = router;
