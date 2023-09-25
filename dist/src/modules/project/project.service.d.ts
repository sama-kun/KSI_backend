import { BaseService } from '@/common/base/BaseService';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UserEntity } from '../../database/entities/user.entity';
export declare class ProjectService extends BaseService<ProjectEntity, CreateProjectDto, UpdateProjectDto> {
    protected repo: Repository<ProjectEntity>;
    constructor(repo: Repository<ProjectEntity>);
    mdnReport(res: Response, user: UserEntity): Promise<void>;
}
