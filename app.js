const express = require("express");
const app = express();
const studentRoute = require("./route.js");
const studentFunctions = require("./controller.js");

app.use(express.json());
app.set("view engine", "ejs");
app.use("/student", studentRoute);

app.use("/", (req, res) => {
  res.render(`pages/index`);
  res.render("student-list", { title: "student List", studentData: data });
});

app.listen(3002, () => [console.log(" The server started on PORT = 3002")]);
