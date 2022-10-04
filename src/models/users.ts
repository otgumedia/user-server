import { PrismaClient } from "@prisma/client";
import { User } from "../types";

const prisma = new PrismaClient();

// Get All of the Users

export async function handleGetUsers() {
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
  return allUsers;
}

// Create A New User

export async function handleCreateUser({
  email,
  name,
  role,
  walletId,
  discord,
}: User) {
  const user = await prisma.users.create({
    data: {
      email,
      name,
      role,
      walletId,
      discord,
    },
  });
  return user;
}
