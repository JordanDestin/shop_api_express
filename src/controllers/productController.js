import prisma from "../db.js"

export const getAllProducts = async (req, res) => {
  const products = await prisma.products.findMany();
  console.log(products);
  res.json({ data: products });
};
