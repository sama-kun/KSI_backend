import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    TypeOrmModule.forFeature([ProjectEntity]),
    JwtModule,
  ],
  exports: [ProjectService],
})
export class ProjectModule {}
