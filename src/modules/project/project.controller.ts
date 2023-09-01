import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { Response } from 'express';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController extends BaseController<
  ProjectEntity,
  CreateProjectDto,
  UpdateProjectDto,
  SearchQueryDto,
  ProjectService
> {
  constructor(private projectService: ProjectService) {
    super();
    this.dataService = projectService;
  }

  @Get(':id/mdnreport')
  mdnreport(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    return this.projectService.mdnReport(res);
  }

  // @Get('test')
  // test(){
  //   return super().
  // }
}
