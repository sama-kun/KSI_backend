import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtModule } from '@nestjs/jwt';
import { CartController } from './cart.controller';
import { ItemModule } from '../item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from '@/database/entities/cart.entity';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [JwtModule, ItemModule, TypeOrmModule.forFeature([CartEntity])],
  exports: [CartService],
})
export class CartModule {}
