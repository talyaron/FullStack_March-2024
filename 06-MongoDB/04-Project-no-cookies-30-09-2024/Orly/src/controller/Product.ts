import express, {Request, Response} from 'express';
import {ProductModel } from '../model/ProductModel';
import {UserModel} from '../model/UserModel';

const router = express.Router();

//Get all products

export async function getAllProducts(req: any, res: any) {
    try {
        const products = await ProductModel.find({status: 'available'});
        res.json(products);
    } catch (error) {
        res.status(500).json({msg: 'Server error'});
    }
};

//Search products by Name
export async function GetProductByName(req: any, res: any) {
    const{name} = req.query;

    try {
        const products = await ProductModel.find({ name: {$regex: name, $options:'i'}, status:'available'});
        res.json(products);
    } catch (error) {
        res.status(500).json({msg: 'Server error'});
    }
};

//find cheapest product

export async function FindProductByCheapest(req: any, res: any) {
try {
   const product = await ProductModel.findOne({status: 'available'}).sort({price: 1 });
   res.json(product);
} catch (error) {
    res.status(500).json({msg:'Server error'})
}
};

