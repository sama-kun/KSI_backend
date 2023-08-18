import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  Get,
  Query,
  Logger,
} from '@nestjs/common';
import { BaseService } from './BaseService';
import { SearchQueryDto } from './dto/search-query.dto';
import { ObjectLiteral } from 'typeorm';
import { BaseModel } from './BaseModel';
import { AuthUser } from '../decorators/auth-user.decorator';
import { UserEntity } from '@/database/entities/user.entity';
const console = new Logger('BaseController');
@Controller()
export abstract class BaseController<
  Entity extends BaseModel & ObjectLiteral,
  CreateDto extends Partial<Entity>,
  UpdateDto extends Partial<Entity>,
  SearchDto extends Partial<Entity & SearchQueryDto>,
  DataService extends Partial<BaseService<Entity, CreateDto, UpdateDto>>,
> {
  public dataService: DataService;

  @Post()
  create(@Body() data: CreateDto, @AuthUser() user: UserEntity = null) {
    return this.dataService.create(data, user, []);
  }

  // @Patch(':id')
  // update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateDto) {
  //   return this.dataService.update(id, data);
  // }

  // @Get(':id')
  // findOne(@Query() query: SearchDto, @Param('id', ParseIntPipe) id: number) {
  //   const { relations } = query;
  //   return this.dataService.findOne(id, relations);
  // }

  // @Get()
  // findAll(@Query() query: SearchDto) {
  //   const { pagination, sort, relations, filter, search } = query;
  //   if (!pagination) {
  //     return this.dataService.findAll(1, 10, sort, relations, filter, search);
  //   }

  //   const page = +pagination.page;
  //   const pageSize = +pagination.pageSize;

  //   return this.dataService.findAll(
  //     page,
  //     pageSize,
  //     sort,
  //     relations,
  //     filter,
  //     search,
  //   );
  // }
}
