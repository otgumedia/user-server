import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { User } from "../types";
import { handleGetUsers, handleCreateUser } from "../models/users";

const prisma = new PrismaClient();

// Get All of the Users

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await handleGetUsers();
    console.log(data);
    res.status(201).send(data);
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
    await prisma.$disconnect();
  }
}

// Create A New User

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, name, role, walletId, discord }: User = req.body;

  console.log(email);

  try {
    const data = await handleCreateUser({
      email,
      name,
      role,
      walletId,
      discord,
    });
    console.log(data);
    res.status(201).send(data);
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
    await prisma.$disconnect();
  }
}
