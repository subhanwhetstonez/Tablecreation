let pool = require("./module.js");

async function createTable(req, res) {
  try {
    return await pool.query(
      `
    CREATE TABLE IF NOT EXISTS user (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    );
  `
    );
  } catch (err) {
    console.log("Already there");
  }
}

module.exports = { createTable: createTable };
