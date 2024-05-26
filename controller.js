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
  res.json("INSERTED DATA");
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
  req.params.stdid;
  console.log("HERE");
  const c = await functions.specificStd(req.params.stdid);
  res.json(c.rows);
}

async function updateUser(req, res) {
  req.params.stdid;
  let {
    first_name: first_name,
    last_name: last_name,
    phone_no: phone_no,
    email: email,
    total_marks: total_marks,
  } = req.body;
  const d = await functions.updateStd(
    req.params.stdid,
    first_name,
    last_name,
    phone_no,
    email,
    total_marks
  );
  res.json(d.rows);
}

async function deleteUser(req, res) {
  req.params.stdid;
  await functions.deleteStd(req.params.stdid);
  res.send("Student Info has been deleted");
}

async function certain(res, res) {
  const f = await table.createTable();
  res.json(f);
}

module.exports = {
  certain: certain,
  inputUser: inputUser,
  userDisplay: userDisplay,
  oneUser: oneUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
