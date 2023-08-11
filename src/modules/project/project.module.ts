import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@/database/prisma.module';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project } from '@prisma/client';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    JwtModule,
    PrismaModule,
  ],
  exports: [ProjectService],
})
export class ProjectModule {}
