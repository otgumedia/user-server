import express from "express";
import { getUsers, createUser } from "../controllers/users";

const router = express.Router();

// Get All of the Users

router.get("/", getUsers);

// Create A New User

router.post("/", createUser);

export default router;
