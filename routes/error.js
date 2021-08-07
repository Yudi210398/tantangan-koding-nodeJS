const express = require("express");
const routerError = express.Router();
const erorStatus = 404;
routerError.use("/", (req, res, next) => {
  res.status(erorStatus);
  res.render("error");
});

module.exports = routerError;
