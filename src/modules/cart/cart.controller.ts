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
import { CartService } from './cart.service';
import { RolesQuard } from '@/common/guards/roles.quard';
import { RoleEnum } from '@/interfaces/enums';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { AuthUser } from '@/common/decorators/auth-user.decorator';
import { UserEntity } from '@/database/entities/user.entity';
import { CartEntity } from '@/database/entities/cart.entity';
import { SearchCartDto } from './dto/search-cart.dto';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create cart' })
  @ApiResponse({
    status: 201,
    type: CartEntity,
    description: 'Cart created successfully',
  })
  @ApiBody({ type: CartEntity })
  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  createCustom(
    @AuthUser() user: UserEntity,
    @Body() data: CartEntity[] & CartEntity,
  ) {
    return this.cartService.createMany(data, user);
  }

  @ApiBearerAuth()
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @ApiOperation({ summary: 'Get Cart by id' })
  @ApiResponse({
    status: 201,
    type: CartEntity,
    description: 'Cart created successfully',
  })
  @ApiQuery({ name: 'relations', required: false, type: Array })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number, @Query() query: SearchCartDto) {
    const { relations } = query;
    return this.cartService.findById(id, relations);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update cart' })
  @ApiResponse({
    status: 201,
    type: CartEntity,
    description: 'Cart updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @ApiBody({ type: CartEntity })
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Patch(':id')
  update(
    @AuthUser() user: UserEntity,
    @Body() data: CartEntity,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.cartService.update(user, id, data);
  }

  // @Post('many')
  // createMany(@Body() data: Cart[] & Cart ,@AuthUser() user: User) {
  //   return this.cartService.createMany(data, user.id)
  // }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add 1 item to Cart' })
  @ApiResponse({
    status: 201,
    type: CartEntity,
    description: 'Cart updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @Get(':id/plus')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  plus(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.plus(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove 1 item from Cart' })
  @ApiResponse({
    status: 201,
    type: CartEntity,
    description: 'Cart updated successfully',
  })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @Get(':id/minus')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  minus(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.minus(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Return items to Base of KSI from Project' })
  @ApiResponse({
    status: 201,
    type: CartEntity,
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
    return this.cartService.return(id, body.initialQuantity);
  }

  @ApiOperation({ summary: 'Get all carts using query' })
  @ApiBearerAuth()
  @ApiQuery({ type: SearchCartDto })
  @Get()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  findAll(@Query() query: SearchQueryDto) {
    const { pagination, sort, relations, filter, search } = query;
    return this.cartService.findAll(
      pagination,
      sort,
      relations,
      filter,
      search,
    );
  }

  @ApiOperation({ summary: 'Delete by ID' })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async remove(@AuthUser() user: UserEntity, @Param('id') id: number) {
    // Check permissions here like that:
    // const record = await super.findOne(query)
    // if (user.id !== record.id) throw new UnauthorizedException()
    console.log(user);
    return this.cartService.delete(user, id);
  }

  @ApiOperation({ summary: 'Send to the Project' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        ids: {
          type: 'array',
          example: [1, 2, 3, 4],
          description: 'The array of ids carts',
        },
      },
    },
  })
  @ApiParam({ name: 'id', description: 'Project ID' })
  @Patch('send/:projectId')
  @ApiBearerAuth()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async sendToProject(
    @AuthUser() user: UserEntity,
    @Body('ids') ids: number[],
    @Param('projectId') projectId: number,
  ) {
    console.log(ids);
    return this.cartService.send(user, ids, projectId);
  }
}
