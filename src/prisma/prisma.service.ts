import { Injectable } from '@nestjs/common';

@Injectable()

export class PrismaService {
  async saveOrderToPostgres(orderData: any) {
    console.log('Saving Order to postgres:' , orderData);
    return {id: Math.floor(Math.random() * 1000)}
  }
}