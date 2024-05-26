let pool = require("./module.js");

async function createTable() {
  return await pool.query(
    `
    CREATE TABLE IF NOT EXISTS subject (
      stdid int,
      subject VARCHAR(100),
      atendence VARCHAR(100)
    );
  `
  );
}

module.exports = { createTable: createTable };
