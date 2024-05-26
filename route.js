const express = require("express");
const Router = express.Router();
const service = require("./controller.js");

Router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

Router.route("/create").get(service.certain);

Router.route("/").get(service.userDisplay).post(service.inputUser);

Router.route("/:stdid")
  .get(service.oneUser)
  .post(service.updateUser)
  .delete(service.deleteUser);

module.exports = Router;
