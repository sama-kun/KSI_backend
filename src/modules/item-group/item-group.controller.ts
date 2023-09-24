import { Controller } from '@nestjs/common';
import { ItemGroupService } from './item-group.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchItemGroupDto } from './dto/search-item.dto';
import { CreateItemGroupDto } from './dto/create-item-group.dto';
import { UpdateItemGroupDto } from './dto/update-item.dto';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Item')
@Controller('item-group')
@ApiBearerAuth()
export class ItemController extends BaseController<
  ItemGroupEntity,
  CreateItemGroupDto,
  UpdateItemGroupDto,
  SearchItemGroupDto,
  ItemGroupService
> {
  constructor(private itemService: ItemGroupService) {
    super();
    this.dataService = itemService;
  }

  // @Get('test')
  // test() {
  //   return super.update(1, { quantity: 3 });
  // }
}
