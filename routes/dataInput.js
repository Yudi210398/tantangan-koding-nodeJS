const express = require("express");
const routerInput = express.Router();
const routerMain = require("./mainPage");
let dataSimpan = [];
routerInput.get("/data-name", (req, res, next) => {
  res.render("datainput");
});

routerInput.post("/data", (req, res, next) => {
  dataSimpan.push({
    dataNama: req.body["Nama"],
  });
  res.redirect("/");
});

module.exports = {
  dataSimpan,
  routerInput,
};
