import express from "express";
import { PrismaClient } from "@prisma/client";
import { getUsers, createUser } from "../controllers/users";
import { User } from "../types";

const router = express.Router();

const prisma = new PrismaClient();

// Get All of the Users

router.get("/", async (req, res, next) => {
  try {
    const data = await getUsers();

    console.log(data);

    res.status(201).send(data);

    await prisma.$disconnect();
  } catch (e) {
    console.error(e);

    res.status(400).send(e);

    await prisma.$disconnect();

    process.exit(1);
  }
});

// Create A New User

router.post("/", async (req, res, next) => {
  const { email, name, role, walletId, discord }: User = req.body;

  try {
    const data = await createUser({ email, name, role, walletId, discord });

    console.log(data);

    res.status(201).send(data);

    await prisma.$disconnect();
  } catch (e) {
    console.error(e);

    res.status(400).send(e);

    await prisma.$disconnect();

    process.exit(1);
  }
});

export default router;
