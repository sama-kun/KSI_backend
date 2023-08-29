import { BadRequestException, Injectable } from '@nestjs/common';
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

  async transaction(
    id: number,
    quantity: number,
    operation: string,
  ): Promise<ItemEntity> {
    const candidate = await this.findById(id, []);

    if (operation === '+') {
      await this.check(id, quantity);
      candidate.quantity -= quantity;
      candidate.projectQuantity += quantity;
    } else {
      candidate.quantity += quantity;
      candidate.projectQuantity -= quantity;
    }

    return this.repo.save(candidate);
  }

  private async check(id: number, transcript: number) {
    const item = await this.findById(id, []);

    if (item.quantity < transcript)
      throw new BadRequestException("Don't enough quantity of item id: " + id);
  }

  // test(){
  //   return super().
  // }
}
