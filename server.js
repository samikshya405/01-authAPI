import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import pool from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

pool
  .query("SELECT NOW()")
  .then((result) => {
    console.log("Database connected");
    console.log(result.rows);
  })
  .catch((error) => {
    console.log("database connection failed");
    console.log(error.message);
  });

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
  console.log("this is ruuning in port", PORT);
});
