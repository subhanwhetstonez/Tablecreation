let express = require("express");
let Router = express.Router();
let service = require("./service.js");

Router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

Router.route("/create").get(service.createTable);

Router.route("/").get(service.stdDisplay).post(service.inputData);

//Router.route("/:id").get().post().delete();

module.exports = Router;
