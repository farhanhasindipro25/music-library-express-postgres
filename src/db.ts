const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "musiclibrary",
  password: "test",
  port: 5432,
});

export default pool;
