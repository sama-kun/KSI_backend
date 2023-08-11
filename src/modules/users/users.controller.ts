import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { UserService } from './users.service';
import { Prisma } from '@prisma/client';
import { BaseController } from '@/common/base/BaseController';
import { User } from '@sentry/node';
import { GetUserDto } from './dto/get-user.dto';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { SearchUserDto } from './dto/search-user.dto';

@Controller('users')
export class UserController extends BaseController<
  User,
  Partial<Prisma.UserUncheckedCreateInput>,
  Prisma.UserCreateInput,
  SearchUserDto,
  UserService
> {
  constructor(private userService: UserService) {
    super();
    this.dataService = userService;
  }

  // @Get('/test')
  // async test() {
  //   return 'ok';
  // }

  // @UseGuards(RolesQuard)
  @Get()
  // @Roles('ADMIN')
  async findAll(@Query() query: SearchQueryDto) {
    return super.findAll(query);
  }

  // @UseGuards(RolesQuard)
  // @Roles('ADMIN')
  // @Get('/:id')
  // async getOne(@Param('id') id: string) {
  //   return await this.userService.findById(id);
  // }
}
