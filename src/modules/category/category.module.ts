import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@/database/prisma.module';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    JwtModule,
    PrismaModule,
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
