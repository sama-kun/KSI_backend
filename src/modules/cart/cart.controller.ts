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
import { Role } from '@/interfaces/enums';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { AuthUser } from '@/common/decorators/auth-user.decorator';
import { UserEntity } from '@/database/entities/user.entity';
import { CartEntity } from '@/database/entities/cart.entity';
import { SearchCartDto } from './dto/search-cart.dto';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
  createCustom(
    @AuthUser() user: UserEntity,
    @Body() data: CartEntity[] & CartEntity,
  ) {
    return this.cartService.createMany(data, user.id);
  }

  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number, @Query() query: SearchCartDto) {
    const { relations } = query;
    return this.cartService.findById(id, relations);
  }

  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
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

  @Get(':id/plus')
  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
  plus(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.plus(id);
  }

  @Get(':id/minus')
  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
  minus(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.minus(id);
  }

  @Post(':id/return')
  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
  return(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { initialQuantity: number },
  ) {
    return this.cartService.return(id, body.initialQuantity);
  }

  @Get('')
  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
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

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(RolesQuard)
  @Roles(Role.ADMIN, Role.USER)
  async remove(@AuthUser() user: UserEntity, @Param('id') id: number) {
    // Check permissions here like that:
    // const record = await super.findOne(query)
    // if (user.id !== record.id) throw new UnauthorizedException()
    console.log(user);
    return this.cartService.delete(user, id);
  }
}
