const express = require("express");
const app = express();
const studentRoute = require("./route.js");
const studentFunctions = require("./controller.js");

app.use(express.json());
app.use("/student", studentRoute);

// app.use("/", (req, res) => {
//   document.write(stdDisplay.rows);
// });

app.listen(3002, () => [console.log(" The server started on PORT = 3002")]);
