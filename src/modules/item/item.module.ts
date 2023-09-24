import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemEntity } from '@/database/entities/item.entity';
import { ItemController } from './item.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity]), JwtModule],
  providers: [ItemService],
  controllers: [ItemController],
  exports: [ItemService],
})
export class ItemModule {}
