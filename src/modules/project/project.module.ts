import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { JwtModule } from '@nestjs/jwt';
import { CartItemModule } from '../cart-item/cart-item.module';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    TypeOrmModule.forFeature([ProjectEntity]),
    JwtModule,
    CartItemModule,
  ],
  exports: [ProjectService],
})
export class ProjectModule {}
