import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import { MainFileEntity } from '@/database/entities/main-file.entity';
import { CreateMainFileDto } from './dto/create-main-file.dto';
export declare class MaintenanceService extends BaseService<MaintenanceEntity, CreateMaintenanceDto, UpdateMaintenanceDto> {
    protected repo: Repository<MaintenanceEntity>;
    protected repoFile: Repository<MainFileEntity>;
    constructor(repo: Repository<MaintenanceEntity>, repoFile: Repository<MainFileEntity>);
    addFile(id: number, dto: CreateMainFileDto): Promise<MainFileEntity>;
}
