import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { ItemEntity } from '@/database/entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService extends BaseService<
  ItemEntity,
  CreateItemDto,
  UpdateItemDto
> {
  constructor(
    @InjectRepository(ItemEntity) protected repo: Repository<ItemEntity>,
  ) {
    super();
  }

  // async transaction(
  //   id: number,
  //   quantity: number,
  //   operation: string,
  // ): Promise<Prisma.ItemUncheckedCreateInput> {
  //   const candidate = await this.findById(id);

  //   let data = null;
  //   if (operation === '+') {
  //     await this.check(id, quantity);
  //     data = {
  //       quantity: candidate.quantity - quantity,
  //     };
  //   } else {
  //     data = {
  //       quantity: candidate.quantity + quantity,
  //     };
  //   }
  //   const item = await super.update(id, data);

  //   return item;
  // }

  // private async check(id: number, transcript: number) {
  //   const item = await this.findById(id);

  //   if (item.quantity < transcript)
  //     throw new BadRequestException("Don't enough quantity of item id: " + id);
  // }

  // test(){
  //   return super().
  // }
}
