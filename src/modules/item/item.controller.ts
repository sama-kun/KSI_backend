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
import { ItemService } from './item.service';
import { BaseController } from '@/common/base/BaseController';
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
import { ItemEntity } from '@/database/entities/item.entity';
import { SearchItemDto } from '@/modules/item/dto/search-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { RolesQuard } from '@/common/guards/roles.quard';
import { Roles } from '@/common/decorators/roles-auth.decorator';
@ApiTags('Item')
@Controller('item')
export class ItemController extends BaseController<
  ItemEntity,
  CreateItemDto,
  UpdateItemDto,
  SearchItemDto,
  ItemService
> {
  constructor(dataService: ItemService) {
    super();
    this.dataService = dataService;
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({
    status: 201,
    type: ItemEntity,
  })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch('/workedHours/:id')
  fillWorkedHours(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { workedHours: number },
  ) {
    return this.dataService.updateWorkedHours(id, body.workedHours);
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({
    status: 201,
    type: ItemEntity,
  })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch('/workingHours/:id')
  fillWorkingHours(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { workingHours: number },
  ) {
    return this.dataService.updateWorkingHours(id, body.workingHours);
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiOperation({ summary: 'Get Item by id' })
  @ApiResponse({
    status: 201,
    type: ItemEntity,
  })
  @ApiQuery({ name: 'relations', required: false, type: Array })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number, @Query() query: SearchItemDto) {
    const { relations } = query;
    return this.dataService.findById(id, relations);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create Item' })
  @ApiResponse({
    status: 201,
    type: ItemEntity,
    description: 'Item created successfully',
  })
  @ApiBody({ type: ItemEntity })
  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  create(
    @Body() data: ItemEntity[] & ItemEntity,
    @AuthUser() user: UserEntity,
  ) {
    return this.dataService.create(data, user);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update Item' })
  @ApiResponse({
    status: 201,
    type: ItemEntity,
    description: 'Item updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiBody({ type: ItemEntity })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch(':id')
  update(
    @AuthUser() user: UserEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ItemEntity,
  ) {
    return this.dataService.update(user, id, data);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all Items using query' })
  @ApiQuery({ type: SearchItemDto })
  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(@Query() query: SearchItemDto) {
    const { pagination, sort, relations, filter, search } = query;
    console.log(relations);
    return this.dataService.findAll(
      pagination,
      sort,
      relations,
      filter,
      search,
    );
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete by ID' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @Delete(':id')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async remove(@AuthUser() user: UserEntity, @Param('id') id: number) {
    console.log(user);
    return this.dataService.delete(user, id);
  }
}
