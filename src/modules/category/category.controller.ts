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
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { CategoryService } from './category.service';
import { BaseController } from '@/common/base/BaseController';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';
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

@ApiTags('Category')
@Controller('category')
export class CategoryController extends BaseController<
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  SearchCategoryDto,
  CategoryService
> {
  constructor(private categoryService: CategoryService) {
    super();
    this.dataService = categoryService;
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiOperation({ summary: 'Get Category by id' })
  @ApiResponse({
    status: 201,
    type: CategoryEntity,
  })
  @ApiQuery({ name: 'relations', required: false, type: Array })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: SearchCategoryDto,
  ) {
    const { relations } = query;
    return this.dataService.findById(id, relations);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create Category' })
  @ApiResponse({
    status: 201,
    type: CategoryEntity,
    description: 'Category created successfully',
  })
  @ApiBody({ type: CategoryEntity })
  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  create(
    @Body() data: CategoryEntity[] & CategoryEntity,
    @AuthUser() user: UserEntity,
  ) {
    return this.dataService.create(data, user);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update Category' })
  @ApiResponse({
    status: 201,
    type: CategoryEntity,
    description: 'Category updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiBody({ type: CategoryEntity })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch(':id')
  update(
    @AuthUser() user: UserEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CategoryEntity,
  ) {
    return this.dataService.update(user, id, data);
  }

  @ApiOperation({ summary: 'Get all Categorys using query' })
  @ApiBearerAuth()
  @ApiQuery({ type: SearchCategoryDto })
  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(@Query() query: SearchCategoryDto) {
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
  @ApiParam({ name: 'id', description: 'Category ID' })
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
}
