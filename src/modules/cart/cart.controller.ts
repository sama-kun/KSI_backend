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
import { CartEntity } from '@/database/entities/cart.entity';

@ApiTags('Cart')
@Controller('cart')
@ApiBearerAuth()
export class CartController {
  constructor(private cartService: CartService) {}

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
  createCustom(@AuthUser() user: UserEntity, @Body() data: CartEntity) {
    return this.cartService.myCreate(data, user);
  }

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

  @ApiOperation({ summary: 'Get all carts using query' })
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
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async remove(@AuthUser() user: UserEntity, @Param('id') id: number) {
    // Check permissions here like that:
    // const record = await super.findOne(query)
    // if (user.id !== record.id) throw new UnauthorizedException()
    console.log(user);
    return this.cartService.delete(user, id);
  }

  @ApiOperation({ summary: 'Return cart API' })
  @ApiParam({ name: 'id', description: 'Cart ID' })
  @Patch(':id/return')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  async sendToProject(@AuthUser() user: UserEntity, @Param('id') id: number) {
    return this.cartService.return(user, id);
  }
}
