import { Order } from '../../models/Order';
import { Request, Response } from 'express';

export async function listOrders(request: Request, response: Response) {

  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    response.json(orders);
  } catch (error) {
    console.log(error);
    response.status(500);

  }
}
