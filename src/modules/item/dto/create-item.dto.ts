import { PartialType } from '@nestjs/swagger';

import { ItemEntity } from '@/database/entities/item.entity';

export class CreateItemDto extends PartialType(ItemEntity) {}
