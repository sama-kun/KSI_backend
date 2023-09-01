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
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  createCustom(
    @AuthUser() user: UserEntity,
    @Body() data: CartEntity[] & CartEntity,
  ) {
    return this.cartService.createMany(data, user);
  }

  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number, @Query() query: SearchCartDto) {
    const { relations } = query;
    return this.cartService.findById(id, relations);
  }

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

  @Get(':id/plus')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  plus(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.plus(id);
  }

  @Get(':id/minus')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  minus(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.minus(id);
  }

  @Post(':id/return')
  @UseGuards(RolesQuard)
  @Roles(RoleEnum.ADMIN, RoleEnum.USER)
  return(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { initialQuantity: number },
  ) {
    return this.cartService.return(id, body.initialQuantity);
  }

  @Get('')
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
