import express from "express";
import { createNewUsers, getAllusers } from "../controllers/userController.js";
const router = express.Router();


router.get("/users", getAllusers);
router.post("/auth/register", createNewUsers);

export default router;
