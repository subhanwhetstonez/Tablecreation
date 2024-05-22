let pool = require("./module.js");

async function createTable(req, res) {
  console.log("hello");
  try {
    let table = await pool.query(
      `
    CREATE TABLE IF NOT EXISTS user (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    );
  `
    );
    res.json("table created");
  } catch (err) {
    console.log("Already there");
  }
}

async function inputData(req, res) {
  let {
    first_name: first_name,
    last_name: last_name,
    phone_no: phone_no,
    email: email,
    total_marks: total_marks,
  } = req.body;
  let innerTable = await pool.query(
    `INSERT INTO students (first_name, last_name, phone_no, email, total_marks) VALUES ('${first_name}','${last_name}','${phone_no}','${email}','${total_marks}') RETURNING * `
  );
  res.json(innerTable.rows);
}

async function stdDisplay(req, res) {
  console.log("DisPlaYed");
  let see = await pool.query("SELECT * FROM students ORDER BY stdid ASC");
  res.json(see.rows);
}

async function specificStd(req, res) {
  const stdID = req.params.StdId;
  console.log(stdID);
  let stdBack = await pool.query(`SELECT * FROM students WHERE id = ${stdID}`);
  res.json(stdBack.rows);
}

async function updateStd(req, res) {
  const stdID = req.params.StdId;
  console.log(stdID, "Got");
  let {
    first_name: first_name,
    last_name: last_name,
    phone_no: phone_no,
    email: email,
    total_marks: total_marks,
  } = req.body;
  let result = await pool.query(
    ` UPDATE students SET first_name = '${first_name}', last_name = '${last_name}', phone_no = '${phone_no}', email = '${email}', total_marks = '${total_marks}' WHERE StdId = ${stdID} RETURNING *`
  );
  res.json(result);
}

async function deleteStd(req, res) {
  const stdID = req.params.StdId;
  await pool
    .query(`DELETE FROM students WHERE id = ${stdID}`)
    .then(res.json("Student Info has been deleted" + `${stdID}`));
}

module.exports = {
  createTable: createTable,
  inputData: inputData,
  stdDisplay: stdDisplay,
  specificStd: specificStd,
  updateStd: updateStd,
  deleteStd: deleteStd,
};
