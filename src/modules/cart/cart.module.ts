import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtModule } from '@nestjs/jwt';
import { CartController } from './cart.controller';
import { ItemGroupModule } from '../item-group/item-group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemModule } from '../cart-item/cart-item.module';
import { CartEntity } from '@/database/entities/cart.entity';
import { ItemModule } from '../item/item.module';

@Module({
  controllers: [CartController],
  providers: [CartService, ItemGroupModule],
  imports: [
    JwtModule,
    CartItemModule,
    TypeOrmModule.forFeature([CartEntity]),
    ItemModule,
  ],
  exports: [CartService],
})
export class CartModule {}
