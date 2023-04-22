const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Immortals@#$2608",
  host: "localhost",
  port: 5432,
  database: "list_todos",
});

module.exports = pool;
