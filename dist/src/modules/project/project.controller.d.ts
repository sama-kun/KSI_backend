import { ProjectService } from './project.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { Response } from 'express';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController extends BaseController<ProjectEntity, CreateProjectDto, UpdateProjectDto, SearchQueryDto, ProjectService> {
    private projectService;
    constructor(projectService: ProjectService);
    mdnreport(id: number, response: Response): Promise<void>;
}
