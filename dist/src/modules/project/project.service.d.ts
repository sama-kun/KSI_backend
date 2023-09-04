import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectService extends BaseService<ProjectEntity, CreateProjectDto, UpdateProjectDto> {
    protected repo: Repository<ProjectEntity>;
    constructor(repo: Repository<ProjectEntity>);
}
