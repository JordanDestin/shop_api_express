import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  const products = await prisma.products.findMany();
  console.log(products);
  res.json({ data: products });
};
