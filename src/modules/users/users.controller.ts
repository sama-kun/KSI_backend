import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { BaseController } from '@/common/base/BaseController';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from '@/database/entities/user.entity';
import { SearchUserDto } from './dto/search-user.dto';

@ApiTags('cats')
@Controller('users')
export class UserController extends BaseController<
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
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
  // @ApiResponse({ status: 200, description: 'Returns all cats.' })
  // @Get()
  // // @Roles('ADMIN')
  // async findAll(@Query() query: SearchQueryDto) {
  //   return super.findAll(query);
  // }

  // @UseGuards(RolesQuard)
  // @Roles('ADMIN')
  // @Get('/:id')
  // async getOne(@Param('id') id: string) {
  //   return await this.userService.findById(id);
  // }
}
