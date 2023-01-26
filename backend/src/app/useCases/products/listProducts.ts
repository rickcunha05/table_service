import { Product } from './../../models/Product';
import { Request, Response } from 'express';

export async function listProducts(request: Request, response: Response) {

  try {
    const products = await Product.find();

    response.json(products);
  } catch (error) {
    console.log(error);
    response.status(500);

  }
}
