import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { BaseController } from '@/common/base/BaseController';

import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import { SearchMaintenanceDto } from '@/modules/maintenance/dto/search-maintenance.dto';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { RolesQuard } from '@/common/guards/roles.quard';
import { RoleEnum } from '@/interfaces/enums';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { AuthUser } from '@/common/decorators/auth-user.decorator';
import { UserEntity } from '@/database/entities/user.entity';
import { MainFileEntity } from '@/database/entities/main-file.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Maintenance')
@Controller('maintenance')
export class MaintenanceController extends BaseController<
  MaintenanceEntity,
  CreateMaintenanceDto,
  UpdateMaintenanceDto,
  SearchMaintenanceDto,
  MaintenanceService
> {
  constructor(dataService: MaintenanceService) {
    super();
    this.dataService = dataService;
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create' })
  @ApiBody({ type: MaintenanceEntity })
  @ApiResponse({
    status: 201,
    type: MaintenanceEntity,
    description: 'Maintenance created successfully',
  })
  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  createCustom(@AuthUser() user: UserEntity, @Body() data: MaintenanceEntity) {
    return this.dataService.create(data, user);
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Maintenance ID' })
  @ApiOperation({ summary: 'Get Maintenance by id' })
  @ApiResponse({
    status: 201,
    type: MaintenanceEntity,
    description: 'Maintenance created successfully',
  })
  @ApiQuery({ name: 'relations', required: false, type: Array })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: SearchMaintenanceDto,
  ) {
    const { relations } = query;
    return this.dataService.findById(id, relations);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update Maintenance' })
  @ApiResponse({
    status: 201,
    type: MaintenanceEntity,
    description: 'Maintenance updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Maintenance ID' })
  @ApiBody({ type: MaintenanceEntity })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch(':id')
  update(
    @AuthUser() user: UserEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: MaintenanceEntity,
  ) {
    return this.dataService.update(user, id, data);
  }

  @ApiOperation({ summary: 'Delete by ID' })
  @ApiParam({ name: 'id', description: 'Maintenance ID' })
  @Delete(':id')
  delete(@AuthUser() user: UserEntity, @Param('id') id: number) {
    return this.dataService.delete(user, id);
  }

  @ApiParam({ name: 'id', description: 'Maintenance ID' })
  @ApiBody({ type: MainFileEntity })
  @Post(':id/addfile')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  addFile(@Body() data: MainFileEntity, @Param('id', ParseIntPipe) id: number) {
    return this.dataService.addFile(id, data);
  }

  // @UseGuards(RolesQuard)
  // @Roles(RoleEnum.ADMIN, RoleEnum.USER)

  @ApiOperation({ summary: 'Get all Maintenances using query' })
  @ApiBearerAuth()
  @ApiQuery({ type: SearchMaintenanceDto })
  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(query: SearchMaintenanceDto) {
    const { pagination, sort, relations, filter, search } = query;
    return this.dataService.findAll(
      pagination,
      sort,
      relations,
      filter,
      search,
    );
  }
  // @Get('test')
  // test(){
  //   return super().
  // }
}
