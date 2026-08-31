import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});
console.log("Connected database:", process.env.DATABASE);
export default pool;
