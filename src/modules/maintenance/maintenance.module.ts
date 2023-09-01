import { Module } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import { MaintenanceController } from './maintenance.controller';
import { MainFileEntity } from '@/database/entities/main-file.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([MaintenanceEntity, MainFileEntity]),
    JwtModule,
  ],
  providers: [MaintenanceService],
  controllers: [MaintenanceController],
})
export class MaintenanceModule {}
