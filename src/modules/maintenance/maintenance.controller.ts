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

  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  createCustom(
    @AuthUser() user: UserEntity,
    @Body() data: MaintenanceEntity[] & MaintenanceEntity,
  ) {
    return this.dataService.create(data, user);
  }

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

  @Delete(':id')
  delete(@AuthUser() user: UserEntity, @Param('id') id: number) {
    return this.dataService.delete(user, id);
  }

  @Post(':id/addfile')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  addFile(@Body() data: MainFileEntity, @Param('id', ParseIntPipe) id: number) {
    return this.dataService.addFile(id, data);
  }

  // @UseGuards(RolesQuard)
  // @Roles(RoleEnum.ADMIN, RoleEnum.USER)

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
