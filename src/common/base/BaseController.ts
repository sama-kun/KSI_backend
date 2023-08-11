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
const console = new Logger('BaseController');
@Controller()
export abstract class BaseController<
  T,
  CreateDto,
  UpdateDto extends Partial<CreateDto>,
  SearchDto extends Partial<SearchQueryDto>,
  DataService extends BaseService<T, CreateDto, UpdateDto>,
> {
  public dataService: DataService;

  @Post()
  create(@Body() data: CreateDto) {
    return this.dataService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: CreateDto) {
    return this.dataService.update(id, data);
  }

  @Get(':id')
  findOne(@Query() query: SearchDto, @Param('id', ParseIntPipe) id: number) {
    const { relations } = query;
    return this.dataService.findOne(id, relations);
  }

  @Get()
  findAll(@Query() query: SearchDto) {
    const { pagination, sort, relations, filter, search } = query;
    if (!pagination) {
      return this.dataService.findAll(1, 10, sort, relations, filter, search);
    }

    const page = +pagination.page;
    const pageSize = +pagination.pageSize;

    return this.dataService.findAll(
      page,
      pageSize,
      sort,
      relations,
      filter,
      search,
    );
  }
}
