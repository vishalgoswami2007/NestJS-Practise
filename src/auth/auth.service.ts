import {Injectable} from '@nestjs/common';  
import {PrismaService} from "../prisma/prisma.service.js";

@Injectable()

export class OrderService {
    constructor(private readonly prismaService: PrismaService) {}

    async executeOrder(orderBody: any) {
        const totalCost = orderBody.price * orderBody.quantity;
        
        const finalOrderData = {
          asset : orderBody.asset,
            totalCost,
        };

        return await this.prismaService.saveOrderToPostgres(finalOrderData);
    }
}