import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchItemDto } from './dto/search-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemEntity } from '@/database/entities/item.entity';

@Controller('item')
export class ItemController extends BaseController<
  ItemEntity,
  CreateItemDto,
  UpdateItemDto,
  SearchItemDto,
  ItemService
> {
  constructor(private itemService: ItemService) {
    super();
    this.dataService = itemService;
  }

  // @Get('test')
  // test() {
  //   return super.update(1, { quantity: 3 });
  // }
}
