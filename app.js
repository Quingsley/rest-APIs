const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const PASSWORD = require("./utils/password").mongoPassword;
const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json()); //application/json

app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feeds", feedRoutes);

app.use((errors, req, res, next) => {
  console.log("ERRORS ⚠️", errors);
  const status = errors.statusCode || 500;
  const message = errors.message;
  res.status(status).json({
    message: message,
  });
});

async function main() {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://quingsley:${PASSWORD}@cluster0.hkxyhxj.mongodb.net/messages?retryWrites=true`
    );
    if (connect) {
      app.listen(8080, () =>
        console.log("Server Running at http://localhost:8080")
      );
    }
  } catch (errors) {
    console.log(errors);
  }
}

main();
