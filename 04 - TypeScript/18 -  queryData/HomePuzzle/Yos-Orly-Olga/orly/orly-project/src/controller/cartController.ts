import { Request, Response } from 'express';
import Cart from '../model/cart';
import { Product } from '../model/types';
import crypto from 'crypto';

const cart = new Cart();

export const addProductToCart = (req: Request, res: Response): void => {
  const { name, img, description, price, quantity } = req.body;

  if (!name || !img || !description || price == null || quantity == null) {
    res.status(400).send('Invalid input');
    return;
  }

  const product: Product = {
    id: crypto.randomUUID(),
    name,
    img,
    description,
    price,
  };

  cart.addProduct(product, quantity);
  res.send('Product added to cart');
};

export const getTotalPrice = (req: Request, res: Response): void => {
  const totalPrice = cart.getTotalPrice();
  res.send(`Total Price: $${totalPrice}`);
};

export const getCart = (req: Request, res: Response): void => {
  res.json(cart.getCart());
};

export const emptyCart = (req: Request, res: Response): void => {
  cart.emptyCart();
  res.send('Cart emptied');
};
