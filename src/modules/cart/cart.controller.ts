import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { CartService } from './cart.service';
import { Prisma, BaseModel } from '@prisma/client';
import { BaseController } from '@/common/base/BaseController';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';

@Controller('xxx')
export class CartController extends BaseController<
  BaseModel,
  Prisma.BaseModelCreateInput,
  Partial<Prisma.BaseModelCreateInput>,
  SearchQueryDto,
  CartService
> {
  constructor(private xxxService: CartService) {
    super();
    this.dataService = xxxService;
  }

  // @Get('test')
  // test(){
  //   return super().
  // }
}
