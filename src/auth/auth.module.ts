import {Module} from '@nestjs/common';
import {OrderController} from './orders.controller.js';
import {OrderService} from './orders.service.js';

@Module({
    controllers: [OrderController],
    providers: [OrderService],
})

export class OrderModule {}