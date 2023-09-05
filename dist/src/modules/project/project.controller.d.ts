import { ProjectService } from './project.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { Response } from 'express';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UserEntity } from '@/database/entities/user.entity';
import { SearchProjectDto } from './dto/search-project.dto';
export declare class ProjectController extends BaseController<ProjectEntity, CreateProjectDto, UpdateProjectDto, SearchQueryDto, ProjectService> {
    private projectService;
    constructor(projectService: ProjectService);
    getOne(id: number, query: SearchProjectDto): Promise<ProjectEntity>;
    create(data: ProjectEntity[] & ProjectEntity, user: UserEntity): Promise<ProjectEntity>;
    update(user: UserEntity, id: number, data: ProjectEntity): Promise<ProjectEntity>;
    findAll(query: SearchProjectDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
    mdnreport(user: UserEntity, id: number, res: Response): Promise<void>;
}
