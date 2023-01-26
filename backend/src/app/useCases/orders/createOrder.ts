import { Order } from './../../models/Order';
import { Request, Response } from 'express';

export async function createOrder(request: Request, response: Response) {

  try {
    const { table, products } = request.body;

    const order = await Order.create({ table, products });

    response.status(201).json(order);
  } catch (error) {
    console.log(error);
    response.status(500);
  }

}
