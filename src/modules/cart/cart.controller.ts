import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
const console = new Logger('CartController');

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  // @Post()
  // @UseGuards(RolesQuard)
  // @Roles(Role.ADMIN, Role.USER)
  // createCustom(@AuthUser() user: User, @Body() data: Cart[] & Cart) {
  //   return this.cartService.createMany(data, user.id);
  // }

  // @UseGuards(RolesQuard)
  // @Roles(Role.ADMIN, Role.USER)
  // @Get(':id')
  // getOne(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Query() query: SearchQueryDto,
  // ) {
  //   const { relations } = query;
  //   return this.cartService.findOne(id, relations);
  // }

  // @UseGuards(RolesQuard)
  // @Roles(Role.ADMIN, Role.USER)
  // @Patch(':id')
  // update(@Body() data: Cart, @Param('id', ParseIntPipe) id: number) {
  //   return this.cartService.update(id, data);
  // }

  // // @Post('many')
  // // createMany(@Body() data: Cart[] & Cart ,@AuthUser() user: User) {
  // //   return this.cartService.createMany(data, user.id)
  // // }

  // @Get('plus/:id')
  // plus(@Param('id', ParseIntPipe) id: number) {
  //   return this.cartService.plus(id);
  // }

  // @Get('minus/:id')
  // minus(@Param('id', ParseIntPipe) id: number) {
  //   return this.cartService.minus(id);
  // }

  // @Post('return/:id')
  // return(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() body: { initialQuantity: number },
  // ) {
  //   return this.cartService.return(id, body.initialQuantity);
  // }
}
