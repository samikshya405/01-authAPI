import express from "express";
import { createNewUsers, getAllusers } from "../controllers/userController.js";
import authmiddleware from "../middleware/authmiddleware.js";
const router = express.Router();


router.get("/users",authmiddleware, getAllusers);
router.post("/auth/register", createNewUsers);

export default router;
