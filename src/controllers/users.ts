import { PrismaClient } from "@prisma/client";
import { User } from "../types";

const prisma = new PrismaClient();

export async function getUsers() {
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

export async function createUser({
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
