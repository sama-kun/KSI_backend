import { Module, forwardRef } from '@nestjs/common';
import { ItemGroupService } from './item-group.service';
import { ItemController } from './item-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
import { ItemModule } from '../item/item.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ItemController],
  providers: [ItemGroupService],
  imports: [TypeOrmModule.forFeature([ItemGroupEntity]), ItemModule, JwtModule],
  exports: [ItemGroupService],
})
export class ItemGroupModule {}
