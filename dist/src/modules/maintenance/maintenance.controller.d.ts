import { MaintenanceService } from './maintenance.service';
import { BaseController } from '@/common/base/BaseController';
import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import { SearchMaintenanceDto } from '@/modules/maintenance/dto/search-maintenance.dto';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { UserEntity } from '@/database/entities/user.entity';
import { MainFileEntity } from '@/database/entities/main-file.entity';
export declare class MaintenanceController extends BaseController<MaintenanceEntity, CreateMaintenanceDto, UpdateMaintenanceDto, SearchMaintenanceDto, MaintenanceService> {
    constructor(dataService: MaintenanceService);
    createCustom(user: UserEntity, data: MaintenanceEntity): Promise<MaintenanceEntity>;
    getOne(id: number, query: SearchMaintenanceDto): Promise<MaintenanceEntity>;
    update(user: UserEntity, id: number, data: MaintenanceEntity): Promise<MaintenanceEntity>;
    delete(user: UserEntity, id: number): Promise<any>;
    addFile(data: MainFileEntity, id: number): Promise<MainFileEntity>;
    findAll(query: SearchMaintenanceDto): Promise<any>;
}
