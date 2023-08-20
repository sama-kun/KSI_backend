import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { UserEntity } from '@/database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    TypeOrmModule.forFeature([ProjectEntity]),
  ],
  exports: [ProjectService],
})
export class ProjectModule {}
