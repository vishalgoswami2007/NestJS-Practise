import { Module } from '@nestjs/common';
import { TradersController } from './traders.controller.js';
import { TradersService } from './traders.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [TradersController],
  providers: [TradersService],
})
export class TradersModule {}