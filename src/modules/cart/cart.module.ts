import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtModule } from '@nestjs/jwt';
import { CartController } from './cart.controller';
import { ItemGroupModule } from '../item-group/item-group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { CartItemModule } from '../cart-item/cart-item.module';

@Module({
  controllers: [CartController],
  providers: [CartService, ItemGroupModule],
  imports: [
    JwtModule,
    CartItemModule,
    TypeOrmModule.forFeature([CartItemEntity]),
  ],
  exports: [CartService],
})
export class CartModule {}
