import { Module } from '@nestjs/common';
import { TradersController } from './traders.controller.js';
import { TradersService } from './traders.service.js';

@Module({
  controllers: [TradersController],
  providers: [TradersService],
})
export class TradersModule {}