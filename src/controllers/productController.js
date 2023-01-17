import prisma from "../db.js"

export const getAllProducts = async (req, res) => {
  const products = await prisma.products.findMany();
  console.log(products);
  res.json({ data: products });
};


export const createProduct = async (req, res) => {
  console.log(req.body)
  const product = await prisma.products.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      quantity_product: parseInt(req.body.quantity_product) ,
      image: req.body.image,
      active: req.body.active,
      price: parseInt(req.body.price),
      tendance: req.body.tendance,
      category_id: parseInt(req.body.category_id)
    },
  })
 res.json({data: product})
}