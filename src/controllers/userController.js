import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
import jwt from "jsonwebtoken";

const getAllusers = (req, res) => {
  res.json({
    message: "all users retrived",
  });
};

const createNewUsers = async (req, res) => {
  const userDetails = req.body;
  const hash_password = await bcrypt.hash(userDetails.password, 10);
  const result = await pool.query(
    `INSERT INTO users(name,email,password_hash) values ($1,$2,$3)`,
    [userDetails.name, userDetails.email, hash_password],
  );

  res.json({
    message: "user created succefully",
    userDetails,
  });
};
const loginUser = async (req, res) => {
  const userDetails = req.body;
  const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    userDetails.email,
  ]);
  if (result.rows.length === 0) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }
  const isPasswordMatch = await bcrypt.compare(
    userDetails.password,
    result.rows[0].password_hash,
  );
  if (!isPasswordMatch) {
    return res.json({
      status: "fail",
      message: "invalid email or password",
    });
  }
  const token = jwt.sign(
    {
      userId: result.rows[0].id,
      userEmail: result.rows[0].email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
  res.json({
    status:"success",
    message:"user login successfully",
    token
    
  })
  
};
export { getAllusers, createNewUsers,loginUser };
