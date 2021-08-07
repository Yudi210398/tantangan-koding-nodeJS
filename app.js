let express = require("express");
let app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mainPage = require("./routes/mainPage.js");
const errorPage = require("./routes/error.js");
const dataPage = require("./routes/dataInput.js");

app.set("view engine", "ejs");

(function () {
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(mainPage);
  app.use("/admin", dataPage.routerInput);
  app.use(errorPage);
  app.listen(port);
})();
