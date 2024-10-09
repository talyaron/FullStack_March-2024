//add product to the database

import { Request, Response } from "express";
import { Product } from "../../models/productsModel/productModel";

export const createProduct = async (req:any, res:any) => {
  try {
    const product = req.query;
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(200).json({message: "Product added successfully"});
  } catch (error) {
    console.log(error);
    res.status(400).json({error: "cant add product"});

  }
};
