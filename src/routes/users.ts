import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();

// Get All of the Users

router.get("/", (req, res, next) => {
  let data: any;

  async function getUsers() {
    const allUsers = await prisma.users.findMany({
      select: {
        id: true,
        walletId: true,
        role: true,
        email: true,
        name: true,
        discord: true,
      },
    });
    data = allUsers;
  }

  getUsers()
    .then(async () => {
      console.log(data);
      res.status(201).send(data);
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      res.status(400).send(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

// Create A New User

router.post("/", (req, res, next) => {
  const { email, name, role, walletId, discord } = req.body;

  let data: any;

  async function createUser() {
    const user = await prisma.users.create({
      data: {
        email,
        name,
        role,
        walletId,
        discord,
      },
    });
    data = user;
  }

  createUser()
    .then(async () => {
      console.log(data);
      res.status(201).send(data);
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.log(e);
      res.status(400).send(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});

export default router;
