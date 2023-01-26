import { Product } from './../../models/Product';
import { Request, Response } from 'express';


export async function listProductsByCategories(request: Request, response: Response) {

  try {
    const { categoryId } = request.params;
    const products = await Product.find().where('category').equals(categoryId);

    response.json(products);
  } catch (error) {
    console.log(error);
    response.status(500);
  }

}
