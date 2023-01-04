const Post = require("../models/post");
const { validationResult } = require("express-validator/check");

exports.getFeeds = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "images/related-1.jpg",
        creator: {
          name: "Quingsley",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = async (req, res, next) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const errors = validationResult(req).errors;
    if (errors.length > 0) {
      const error = new Error("Validation failed Bad Input!");
      error.statusCode = 422;
      throw error;
    }
    const post = new Post({
      title: title,
      content: content,
      imageUrl: "images/related-1.jpg",
      creator: {
        name: "Jerome",
      },
    });

    const result = await post.save();
    if (result) {
      res.status(201).json({
        message: "Post created Successfully",
        post: result,
      });
    }
  } catch (errors) {
    if (!errors.statusCode) {
      errors.statusCode = 500;
    }
    next(errors);
  }
  //Create Post in db
};
