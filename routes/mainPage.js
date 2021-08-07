const express = require("express");
const routerMain = express.Router();
let dataPage = require("./dataInput.js");
routerMain.get("/", (req, res, next) => {
  let dataNamas = dataPage.dataSimpan;

  res.render("mainPage", { dataNamas });
});

module.exports = routerMain;
