import  {Controller ,  Post , Body, } from '@nestjs/common';
import { OrderService } from './orders.service.js';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {} 
  @Post('place')
  async createOrder(@Body() body: any) {
    return this.orderService.executeOrder(body);
  }

}