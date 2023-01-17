import prisma from "../db.js"

export const getAllCategory =  async (req,res) => {
    const categories = await prisma.categories.findMany();
    console.log(categories);
    res.json({data: categories})
}

export const createCategory = async (req, res) => {
  console.log(req)
  const category = await prisma.categories.create({
    data: {
      name: req.body.name,
    },
  })
  res.json({data: category})
}

