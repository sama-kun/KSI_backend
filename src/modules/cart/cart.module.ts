import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@/database/prisma.module';
import { CartController } from './cart.controller';
import { ItemModule } from '../item/item.module';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    JwtModule,
    PrismaModule,
    ItemModule,
  ],
  exports: [CartService],
})
export class CartModule {}
