import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { CartItemController } from './cart-item.controller';
import { JwtModule } from '@nestjs/jwt';
import { ItemGroupModule } from '../item-group/item-group.module';
import { ItemModule } from '../item/item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartItemEntity]),
    JwtModule,
    ItemGroupModule,
    ItemModule,
  ],
  providers: [CartItemService],
  controllers: [CartItemController],
  exports: [CartItemService],
})
export class CartItemModule {}
