import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectService } from './project.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@/database/prisma.module';
import { ProjectController } from './project.controller';

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
