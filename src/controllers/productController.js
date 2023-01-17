import prisma from "../db.js"

export const getAllProducts = async (req, res) => {
  const products = await prisma.products.findMany();
  console.log(products);
  res.json({ data: products });
};


export const createProduct = async (req, res) => {

  const product = await prisma.products.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      quantity_product: parseInt(req.body.quantity_product) ,
      image: req.body.image,
      active: JSON.parse(req.body.active),
      price: parseInt(req.body.price),
      tendance: JSON.parse(req.body.tendance),
      category_id: parseInt(req.body.category_id)
    },
  })
 res.json({data: product})
}

export const getProduct = async (req, res) => {
  const id = parseInt(req.params.id );
  const product = await prisma.products.findFirst({
    where: {
      id,
    }
  })

  res.json({data: product})
}