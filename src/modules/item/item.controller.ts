import { Controller } from '@nestjs/common';
import { ItemService } from './item.service';
import { Prisma, Item } from '@prisma/client';
import { BaseController } from '@/common/base/BaseController';
import { SearchItemDto } from './dto/search-item.dto';

@Controller('item')
export class ItemController extends BaseController<
  Item,
  Prisma.ItemCreateInput,
  Partial<Prisma.ItemCreateInput>,
  SearchItemDto,
  ItemService
> {
  constructor(private xxxService: ItemService) {
    super();
    this.dataService = xxxService;
  }

  // @Get('test')
  // test(){
  //   return super().
  // }
}
