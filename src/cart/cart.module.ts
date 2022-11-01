import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schemas/cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Cart',
      schema: CartSchema
    }])
  ],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
