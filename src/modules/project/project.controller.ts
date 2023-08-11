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
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { ProjectService } from './project.service';
import { Prisma, Project } from '@prisma/client';
import { BaseController } from '@/common/base/BaseController';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { Response } from 'express';

@Controller('project')
export class ProjectController extends BaseController<
  Project,
  Prisma.ProjectCreateInput,
  Partial<Prisma.ProjectCreateInput>,
  SearchQueryDto,
  ProjectService
> {
  constructor(private projectService: ProjectService) {
    super();
    this.dataService = projectService;
  }

  @Get(':id/mdnreport')
  mdnreport(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    return this.projectService.mdnReport(response);
  }
  // @Get('test')
  // test(){
  //   return super().
  // }
}
