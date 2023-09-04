import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
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
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RoleEnum } from '@/interfaces/enums';
import { AuthUser } from '@/common/decorators/auth-user.decorator';
import { UserEntity } from '@/database/entities/user.entity';
import { RolesQuard } from '@/common/guards/roles.quard';
import { SearchProjectDto } from './dto/search-project.dto';
import { Roles } from '@/common/decorators/roles-auth.decorator';

@ApiTags('Project')
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

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Project ID' })
  @ApiOperation({ summary: 'Get Project by id' })
  @ApiResponse({
    status: 201,
    type: ProjectEntity,
    description: 'Project created successfully',
  })
  @ApiQuery({ name: 'relations', required: false, type: Array })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: SearchProjectDto,
  ) {
    const { relations } = query;
    return this.dataService.findById(id, relations);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create Project' })
  @ApiResponse({
    status: 201,
    type: ProjectEntity,
    description: 'Project created successfully',
  })
  @ApiBody({ type: ProjectEntity })
  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  create(
    @Body() data: ProjectEntity[] & ProjectEntity,
    @AuthUser() user: UserEntity,
  ) {
    return this.dataService.create(data, user);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update Project' })
  @ApiResponse({
    status: 201,
    type: ProjectEntity,
    description: 'Project updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Project ID' })
  @ApiBody({ type: ProjectEntity })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch(':id')
  update(
    @AuthUser() user: UserEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ProjectEntity,
  ) {
    return this.dataService.update(user, id, data);
  }

  @ApiOperation({ summary: 'Get all Projects using query' })
  @ApiBearerAuth()
  @ApiQuery({ type: SearchProjectDto })
  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(@Query() query: SearchProjectDto) {
    const { pagination, sort, relations, filter, search } = query;
    return this.dataService.findAll(
      pagination,
      sort,
      relations,
      filter,
      search,
    );
  }

  @ApiOperation({ summary: 'Delete by ID' })
  @ApiParam({ name: 'id', description: 'Project ID' })
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async remove(@AuthUser() user: UserEntity, @Param('id') id: number) {
    // Check permissions here like that:
    // const record = await super.findOne(query)
    // if (user.id !== record.id) throw new UnauthorizedException()
    console.log(user);
    return this.dataService.delete(user, id);
  }
  // @Get(':id/mdnreport')
  // mdnreport(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
  //   return this.projectService.mdnReport(res);
  // }

  // @Get('test')
  // test(){
  //   return super().
  // }
}
