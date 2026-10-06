import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TradersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  createTrader(username: string, email: string) {
    return this.prisma.trader.create({
      data: {
        username,
        email,
      },
    });
  }

  getAllTraders() {
    return this.prisma.trader.findMany();
  }
}