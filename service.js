const express = require("express");
let pool = require("./module.js");

console.log("WHATSS");

async function inputData(first_name, last_name, phone_no, email, total_marks) {
  return await pool.query(
    `INSERT INTO students (first_name, last_name, phone_no, email, total_marks) VALUES ('${first_name}','${last_name}','${phone_no}','${email}','${total_marks}') RETURNING * `
  );
}

async function stdDisplay() {
  console.log("DisPlaYed");
  return await pool.query("SELECT * FROM students ORDER BY stdid ASC");
}

async function specificStd(stdiD) {
  console.log("there");
  return await pool.query(`SELECT * FROM students WHERE stdid = ${stdiD}`);
}

async function updateStd(
  stdiD,
  first_name,
  last_name,
  phone_no,
  email,
  total_marks
) {
  console.log(stdiD, "Got");
  return await pool.query(
    ` UPDATE students SET first_name = '${first_name}', last_name = '${last_name}', phone_no = '${phone_no}', email = '${email}', total_marks = '${total_marks}' WHERE stdid = ${stdiD} RETURNING *`
  );
}

async function deleteStd(stdiD) {
  return await pool.query(`DELETE FROM students WHERE stdid = ${stdiD}`);
}

module.exports = {
  inputData: inputData,
  stdDisplay: stdDisplay,
  specificStd: specificStd,
  updateStd: updateStd,
  deleteStd: deleteStd,
};
