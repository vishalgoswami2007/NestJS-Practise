import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { TradersService } from './traders.service.js';

@Controller('traders')
export class TradersController {
  constructor(
    private readonly tradersService: TradersService,
  ) {}

  @Post()
  createTrader(
    @Body()
    body: {
      username: string;
      email: string;
    },
  ) {
    return this.tradersService.createTrader(
      body.username,
      body.email,
    );
  }

  @Get()
  getAllTraders() {
    return this.tradersService.getAllTraders();
  }
}