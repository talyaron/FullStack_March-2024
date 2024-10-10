import express, {Request, Response} from 'express';
import {ProductModel } from '../model/ProductModel';
import {UserModel} from '../model/UserModel';

//Add product to cart
export async function AddProductToCart(req: any, res: any) {
    const {userId, productId} = req.body;
    try {
        const user = await UserModel.findById(userId);
        const product = await ProductModel.findById(productId);

        if (user && product) {
            user.cart.push(productId);
            product.status = 'cart';
            await user.save();
            
            res.json({msg: 'Product added to cart', cart: user.cart});
            
        } else {
            res.status(404).json({msg: 'User or product not found'})
        }
        
    } catch (error) {
        res.status(500).json({msg: 'Server error'})
    }
};
 
//View the cart
export async function ViewUserCart(req:any, res:any) {
    try {
        const user = req.params.userID.populate('cart');

        if(!user) {
            return res.status(404).json({message:'User not found'})
        }
        res.status(200).json({ cart: user.cart });
    } catch (error) {
        res.status(500).json({message: 'Server error', error})
    }
}

//Remove Product from cart
export async function RemoveProductFromCart(req: any, res: any) {
    try {
        const userId = req.params.userId;
        const productId = req.params.product.Id;

        const user = await UserModel.findById(userId);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }

        user.cart = user.cart.filter((item) => item.toString() !==productId);

        await user.save();

        res.status(200).json({message:'Product removed from cart', cart: user.cart });
    } catch (error) {
        res.status(500).json({message: 'Server Error', error })
    }

}