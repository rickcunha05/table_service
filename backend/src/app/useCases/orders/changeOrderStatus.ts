import { Order } from './../../models/Order';
import { Request, Response } from 'express';

export async function changeOrderStatus(request: Request, response: Response) {

  try {
    const { orderId } = request.params;
    const { status } = request.body;
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response.status(400).json({
        error: 'Status should ve one of these: WAITING, IN_PRODUCTION, DONE.'
      });
    }
    await Order.findByIdAndUpdate(orderId, { status });
    response.sendStatus(204);
  } catch (error) {
    console.log(error);
    response.status(500);
  }

}
