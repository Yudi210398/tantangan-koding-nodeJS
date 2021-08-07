const express = require("express");
const routerMain = express.Router();
let dataPage = require("./dataInput.js");
routerMain.get("/", (req, res, next) => {
  let dataNamas = dataPage.dataSimpan;

  res.render("mainPage", { titleDocs: `Home Page`, dataNamas, path: `/` });
});

module.exports = routerMain;
