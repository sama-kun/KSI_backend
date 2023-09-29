import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtModule } from '@nestjs/jwt';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemModule } from '../cart-item/cart-item.module';
import { CartEntity } from '@/database/entities/cart.entity';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [CartItemModule, JwtModule, TypeOrmModule.forFeature([CartEntity])],
  exports: [CartService],
})
export class CartModule {}
