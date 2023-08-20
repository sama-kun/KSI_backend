import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtModule } from '@nestjs/jwt';
import { CategoryController } from './category.controller';
import { CategoryEntity } from '../../database/entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  exports: [CategoryService],
})
export class CategoryModule {}
