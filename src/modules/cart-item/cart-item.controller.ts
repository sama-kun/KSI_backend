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
import { CartItemService } from './cart-item.service';
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

import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { SearchCartItemDto } from '@/modules/cart-item/dto/search-cart-item.dto';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { RolesQuard } from '@/common/guards/roles.quard';
import { Roles } from '@/common/decorators/roles-auth.decorator';
@ApiTags('CartItem')
@Controller('cart-item')
export class CartItemController extends BaseController<
  CartItemEntity,
  CreateCartItemDto,
  UpdateCartItemDto,
  SearchCartItemDto,
  CartItemService
> {
  constructor(dataService: CartItemService) {
    super();
    this.dataService = dataService;
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'CartItem ID' })
  @ApiOperation({ summary: 'Get CartItem by id' })
  @ApiResponse({
    status: 201,
    type: CartItemEntity,
  })
  @ApiQuery({ name: 'relations', required: false, type: Array })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: SearchCartItemDto,
  ) {
    const { relations } = query;
    return this.dataService.findById(id, relations);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create CartItem' })
  @ApiResponse({
    status: 201,
    type: CartItemEntity,
    description: 'CartItem created successfully',
  })
  @ApiBody({ type: CartItemEntity })
  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  create(
    @Body() data: CartItemEntity[] & CartItemEntity,
    @AuthUser() user: UserEntity,
  ) {
    return this.dataService.createMany(data, user);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update CartItem' })
  @ApiResponse({
    status: 201,
    type: CartItemEntity,
    description: 'CartItem updated successfully',
  })
  @ApiParam({ name: 'id', description: 'CartItem ID' })
  @ApiBody({ type: CartItemEntity })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch(':id')
  update(
    @AuthUser() user: UserEntity,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CartItemEntity,
  ) {
    return this.dataService.update(user, id, data);
  }

  @ApiOperation({ summary: 'Get all CartItems using query' })
  @ApiBearerAuth()
  @ApiQuery({ type: SearchCartItemDto })
  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(@Query() query: SearchCartItemDto) {
    const { pagination, sort, relations, filter, search } = query;
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
  @ApiParam({ name: 'id', description: 'CartItem ID' })
  @Delete(':id')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async remove(@AuthUser() user: UserEntity, @Param('id') id: number) {
    console.log(user);
    return this.dataService.remove(id, user);
  }

  @ApiOperation({ summary: 'Add 1 item to Cart' })
  @ApiResponse({
    status: 201,
    type: CartItemEntity,
    description: 'Cart updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @Get(':id/plus')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  plus(@Param('id', ParseIntPipe) id: number) {
    return this.dataService.plus(id);
  }

  @ApiOperation({ summary: 'Remove 1 item from Cart' })
  @ApiResponse({
    status: 201,
    type: CartItemEntity,
    description: 'Cart updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @Get(':id/minus')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  minus(@Param('id', ParseIntPipe) id: number) {
    return this.dataService.minus(id);
  }

  @ApiOperation({ summary: 'Return items to Base of KSI from Project' })
  @ApiResponse({
    status: 201,
    type: CartItemEntity,
    description: 'Items returned succesfully',
  })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        initialQuantity: {
          type: 'number',
          example: 10,
          description: 'The initial quantity of the cart',
        },
      },
    },
  })
  @Post(':id/return')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  return(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { initialQuantity: number },
  ) {
    return this.dataService.return(id, body.initialQuantity);
  }
}
