import {Module} from '@nestjs/common';
import {PrismaModule} from './prisma/prisma.module.js';  
import {OrderModule} from './orders/orders.module.js';

@Module({
  imports: [PrismaModule, OrderModule],
})
export class AppModule {}