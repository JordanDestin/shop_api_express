import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const getAllProducts = async (req,res) => {
    // prisma.products.findMany()
    // .then((data) => {
    //     res.status(200).send(data)
    // }).catch((err) => {
    //     res.status(500).send({
    //         message: "erreur"
    //     })
    // });

   // const allProducts = await prisma.products.findMany()

   
     const products = await prisma.products.findMany()
     console.log(products);
       res.json({data: products})

}

// export default {
//     getAllProducts(req,res){
//         prisma.products.findMany()
//         .then((data) => {
//             res.status(200).send(data)
//         }).catch((err) => {
//             res.status(500).send({
//                 message: "erreur"
//             })
//         });
//     }
// }
