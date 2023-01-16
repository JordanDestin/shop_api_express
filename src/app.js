import express from 'express';
import cors from 'cors';
import productRoute from './routes/product.js';
import categoryRoute from "./routes/category.js";
import userRoute from "./routes/user.js";


const app = express();
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server run"
    })
}) 
app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use('/api',productRoute);
app.use('/api',categoryRoute);
app.use('/api',userRoute);


export default app;