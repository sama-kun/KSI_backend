import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { BaseController } from '@/common/base/BaseController';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from '@/database/entities/user.entity';
import { SearchUserDto } from './dto/search-user.dto';
import { AuthUser } from '@/common/decorators/auth-user.decorator';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';

@ApiTags('cats')
@Controller('user')
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

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @AuthUser() user: UserEntity,
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.dataService.update(user, id, updateUserDto);
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
