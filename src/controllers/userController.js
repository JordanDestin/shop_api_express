import prisma from "../db.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {

    console.log(req,"ssdsds")
    const user = await prisma.users.create({
        data: {
            name: req.query.name,
            email: req.query.email,
            password: await bcrypt.hash(req.query.password,5),
            admin: req.query.admin
            
        }
    });
    

    res.json({message: "user create"});
};

export const login = async (req, res) => {
    const user = await prisma.users.findUnique({
        where:{
            email: req.body.email
        }
    })

    const isValid = await bcrypt.compare(req.body.password, user.paswword)

    if (!isValid) {
        res.status(401)
        res.json({message: 'nope'})
        return
      }
    
     // const token = createJWT(user)
    //  res.json({ token })
};