import { Injectable } from '@nestjs/common';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { BaseService } from '@/common/base/BaseService';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';

import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import { MainFileEntity } from '@/database/entities/main-file.entity';
import { CreateMainFileDto } from './dto/create-main-file.dto';

@Injectable()
export class MaintenanceService extends BaseService<
  MaintenanceEntity,
  CreateMaintenanceDto,
  UpdateMaintenanceDto
> {
  constructor(
    @InjectRepository(MaintenanceEntity)
    protected repo: Repository<MaintenanceEntity>,
    @InjectRepository(MainFileEntity)
    protected repoFile: Repository<MainFileEntity>,
  ) {
    super();
  }
  async addFile(id: number, dto: CreateMainFileDto): Promise<MainFileEntity> {
    try {
      const main = await this.findById(id, []);
      dto.maintenance = main;
      const mainFile = await this.repoFile.save(dto);
      return await this.repoFile.findOne({ where: { id: mainFile.id } });
    } catch (error) {
      throw new TypeORMError(error);
    }
  }
}
