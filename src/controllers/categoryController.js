import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategory =  async (req,res) => {
    const categories = await prisma.categories.findMany();
    console.log(categories);
    res.json({data: categories})
}