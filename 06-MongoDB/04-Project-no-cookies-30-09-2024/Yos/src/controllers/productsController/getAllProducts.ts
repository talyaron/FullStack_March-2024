import mongoose from "mongoose";    
import Product from "../../models/productsModel/productModel";

export const getAllProducts = async (req:any, res:any) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant get products"});
        
    }

}