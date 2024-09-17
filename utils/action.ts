"use server";

import { PrismaClient } from "@prisma/client";

export async function getAllFarms() {
  const prisma = new PrismaClient();
  const data = await prisma.farm.findMany();
  prisma.$disconnect();
  return data;
}
