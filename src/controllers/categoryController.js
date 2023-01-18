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

export const getCategory = async (req, res) => {
  const id = parseInt(req.params.id );
  const category = await prisma.categories.findFirst({
    where: {
      id,
    }
  })

  res.json({data: category})
}

export const updateCategory = async (req, res) => {
  const id = parseInt(req.params.id );
  const updated = await prisma.categories.update({
    where: {    
        id
    },
    data: {
      name: req.body.name,
    },
  })

  res.json({data: updated})
}

export const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id );
  const deleteCategory = await prisma.categories.delete({
    where: {
      id
    }
  })

  res.json({data: deleteCategory})
}
