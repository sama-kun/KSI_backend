import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtModule } from '@nestjs/jwt';
import { CartController } from './cart.controller';
import { ItemModule } from '../item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemEntity } from '@/database/entities/cart-item.entity';

@Module({
  controllers: [CartController],
  providers: [CartService, ItemModule],
  imports: [JwtModule, ItemModule, TypeOrmModule.forFeature([CartItemEntity])],
  exports: [CartService],
})
export class CartModule {}
