import { BaseService } from '@/common/base/BaseService';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UserEntity } from '../../database/entities/user.entity';
import { CartItemService } from '../cart-item/cart-item.service';
export declare class ProjectService extends BaseService<ProjectEntity, CreateProjectDto, UpdateProjectDto> {
    protected repo: Repository<ProjectEntity>;
    protected repoCartItem: CartItemService;
    constructor(repo: Repository<ProjectEntity>, repoCartItem: CartItemService);
    test(res: Response, user: UserEntity, project: any): Promise<void>;
    mdnReport(res: Response, user: UserEntity, id: number): Promise<void>;
}
