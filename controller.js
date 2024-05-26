const functions = require("./service.js");
const table = require("./table.js");

console.log("Hello");

async function inputUser(req, res) {
  let {
    first_name: first_name,
    last_name: last_name,
    phone_no: phone_no,
    email: email,
    total_marks: total_marks,
  } = req.body;
  const a = await functions.inputData(
    first_name,
    last_name,
    phone_no,
    email,
    total_marks
  );
  res.json("INSERTED DATA" + a.rows);
}

async function userDisplay(req, res) {
  try {
    const b = await functions.stdDisplay();
    res.json(b.rows);
    console.log("Ploop");
  } catch (err) {
    console.log("error");
  }
}

async function oneUser(req, res) {
  console.log("HERE");
  const c = await functions.specificStd();
  res.json(c.rows);
}

async function updateUser(req, res) {
  let {
    first_name: first_name,
    last_name: last_name,
    phone_no: phone_no,
    email: email,
    total_marks: total_marks,
  } = req.body;
  const d = await functions.updateStd(
    first_name,
    last_name,
    phone_no,
    email,
    total_marks
  );
  res.json(d.rows);
}

async function deleteUser(req, res) {
  await functions.deleteStd();
  res.send("Student Info has been deleted");
}

async function certain(res, res) {
  const f = await functions.createTable();
  res.json(f.rows);
}

module.exports = {
  certain: certain,
  inputUser: inputUser,
  userDisplay: userDisplay,
  oneUser: oneUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
