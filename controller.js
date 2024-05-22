const express = require("express");
const app = express();
const studentRoute = require("./route.js");

app.use(express.json());
app.use("/student", studentRoute);

app.use("/", (req, res) => {
  res.send(
    `Hello There! Welcome to  the Server <br> Use /student to see student list and if you know the id use /student/(ID NUMBER))`
  );
});

app.listen(3002, () => [console.log(" The server started on PORT = 3002")]);
