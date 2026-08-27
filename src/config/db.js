import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "auth_api",
  user: "postgres",
  password: "postgres",
});
export default pool;
