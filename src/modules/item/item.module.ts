import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { PrismaModule } from '@/database/prisma.module';
import { ItemController } from './item.controller';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    PrismaModule,
  ],
  exports: [ItemService],
})
export class ItemModule {}
