import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { XxxService } from './xxx.service';
import { Prisma, BaseModel } from '@prisma/client';
import { BaseController } from '@/common/base/BaseController';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';

// @ts-ignore
import { XxxEntity } from '@/database/entities/xxx.entity';
import { SearchXxxDto } from '@/modules/xxx/dto/search-xxx.dto';
import { CreateXxxDto } from './dto/create-xxx.dto';
import { UpdateXxxDto } from './dto/update-xxx.dto';

@Controller('xxx')
export class XxxController extends BaseController<
  XxxEntity,
  CreateXxxDto,
  UpdateXxxDto,
  SearchXxxDto,
  XxxService
> {
  constructor(dataService: XxxService) {
    super();
    this.dataService = dataService;
  }

  // @Get('test')
  // test(){
  //   return super().
  // }
}
